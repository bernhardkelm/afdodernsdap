<script setup lang="ts">
import { onBeforeUnmount, ref, watch, type Ref } from 'vue';

// Types
import { SwipeDirections } from '@/types/SwipeDirections';
import type { SwipeEvent } from '@/types/SwipeEvent';
import type { SwipeConfidence } from '@/types/SwipeConfidence';

// Props
interface SwipableComponentProps {
  activationDeadzone: number | undefined;
  activationThresholdPercent: number | undefined;
  maxRotation: number | undefined;
  horizontalScalingFactor: number | undefined;
  verticalScalingFactor: number | undefined;
}

const props = withDefaults(defineProps<SwipableComponentProps>(), {
  activationDeadzone: 10,
  activationThresholdPercent: 50,
  maxRotation: 10,
  horizontalScalingFactor: 0.6,
  verticalScalingFactor: 0.8,
});

// Emits
const emit = defineEmits([
  'isScrolling',
  'isMouseDragging',
  'confidenceUpdate',
  'solve-left',
  'solve-right',
]);

// Animation constants
const defaultStyle = 'translate3d(0px, 0px, 0px) rotate(0deg)';

// Global window variables
const motionIsReduced =
  window.matchMedia(`(prefers-reduced-motion: reduce)`).matches ||
  window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

// Card movement base values
const initialX = ref(0);
const initialY = ref(0);
const currentX = ref(0);
const currentY = ref(0);
const centerX = ref(0);
const rotationCenterY = ref(0);
const rotationCenterX = ref(0);
const currentActivationThreshold = ref(0);
const isScrolling: Ref<undefined | boolean> = ref(undefined);
const isMouseDragging: Ref<boolean> = ref(false);

// Misc refs
const hasInitialAnimation = ref(true);

if (motionIsReduced) {
  hasInitialAnimation.value = false;
}

// Card movement styles and defaults
const transformStyle = ref(defaultStyle);
const transitionStyle = ref('none');
const currentRotationLimit = ref(0);

// Methods

/**
 * clampedScales a value from one range to another clamped to the toRange
 * @param {number[]} fromRange - The range of the original value
 * @param {number[]} toRange - The range to clampedScale the value to
 * @returns {(from: number) => number} - A function that clampedScales the value
 */
const clampedScale = (fromRange: number[], toRange: number[]): ((from: number) => number) => {
  const [fromMin, fromMax] = fromRange;
  const [toMin, toMax] = toRange;
  const d = (toMax - toMin) / (fromMax - fromMin);
  return (from: number) => Math.min(Math.max((from - fromMin) * d + toMin, toMin), toMax);
};

/**
 * Creates a function to map a value from a linear range to an exponential range clamped to the exponential range
 * @param {number[]} linearRange - The linear range as [min, max].
 * @param {number[]} exponentialRange - The exponential range as [min, max].
 * @returns {(value: number) => number} A function that maps a value from the linear range to the exponential range.
 */
const clampedExponentialMapper = (
  linearRange: number[],
  exponentialRange: number[],
): ((value: number) => number) => {
  const [linearMin, linearMax] = linearRange;
  const [expMin, expMax] = exponentialRange;

  return (value: number): number => {
    if (linearMax === linearMin) {
      throw new Error('Linear range cannot have identical min and max values.');
    }
    // Normalize the linear value to a 0-1 range
    const normalizedValue = (value - linearMin) / (linearMax - linearMin);

    // Handle special case where expMin is 0
    if (expMin === 0) {
      return Math.min(Math.max(expMax * Math.pow(normalizedValue, 2)), expMax); // Quadratic scaling from 0 to expMax
    }

    // Map the normalized value to the exponential range
    const expRange = Math.log(expMax / expMin);
    const exponentialValue = expMin * Math.exp(normalizedValue * expRange);

    return Math.min(Math.max(exponentialValue, expMin), expMax);
  };
};

/**
 * Starts the card movement
 * @param {MouseEvent | TouchEvent} event - The event that triggered the movement
 * @returns {void}
 */
const startCardMove = (event: MouseEvent | TouchEvent) => {
  if (motionIsReduced) {
    return;
  }

  // Reset initial animation to not interfere with the movement
  hasInitialAnimation.value = false;

  transitionStyle.value = 'none';
  currentRotationLimit.value = props.maxRotation;

  if (event instanceof MouseEvent) {
    initialX.value = event.clientX;
    initialY.value = event.clientY;
    currentX.value = event.clientX;
    currentY.value = event.clientY;

    (document.body as HTMLElement)?.addEventListener('mousemove', updateMoveCoordinates);

    (document.body as HTMLElement)?.addEventListener('mouseup', resetCardStatus);
  } else if (event instanceof TouchEvent) {
    initialX.value = event.touches[0].clientX;
    initialY.value = event.touches[0].clientY;
    currentX.value = event.touches[0].clientX;
    currentY.value = event.touches[0].clientY;

    (event.currentTarget as HTMLElement)?.addEventListener('touchmove', updateMoveCoordinates, {
      passive: false,
    });
    (event.currentTarget as HTMLElement)?.addEventListener('touchend', resetCardStatus);
  }

  centerX.value = window.innerWidth / 2;
  rotationCenterY.value =
    (event.currentTarget as HTMLElement).getBoundingClientRect().top +
    (event.currentTarget as HTMLElement).getBoundingClientRect().height / 2;
  rotationCenterX.value =
    (event.currentTarget as HTMLElement).getBoundingClientRect().left +
    (event.currentTarget as HTMLElement).getBoundingClientRect().width / 2;
};

/**
 * Updates the card coordinates based on the event
 * @param {MouseEvent | TouchEvent} event - The event that triggered the update
 * @returns {void}
 */
const updateMoveCoordinates = (event: MouseEvent | TouchEvent) => {
  event.stopPropagation();

  if (event instanceof MouseEvent) {
    isMouseDragging.value = true;
    currentX.value = event.clientX;
    currentY.value = event.clientY;
  } else if (event instanceof TouchEvent) {
    // If the content of the element is larger than the element itself, we have to check if the user is scrolling
    if (isScrolling.value === true) {
      return;
    }

    if (
      isScrolling.value === undefined &&
      (event.target as HTMLElement).clientHeight < (event.target as HTMLElement).scrollHeight
    ) {
      const deltaX = event.touches[0].clientX - initialX.value;
      const deltaY = event.touches[0].clientY - initialY.value;
      const threshold = 0.3;

      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > threshold) {
        // Vertical movement (scrolling)
        isScrolling.value = true;
        removeEventListener(event);
        return;
      } else {
        // Horizontal movement (swiping)
        event.preventDefault();
        isScrolling.value = false;
      }
    }

    currentX.value = event.touches[0].clientX;
    currentY.value = event.touches[0].clientY;
  }
};

/**
 * Removes the event listeners from the card
 * @param {MouseEvent | TouchEvent} event - The event that triggered the removal
 * @returns {void}
 */
const removeEventListener = (event: MouseEvent | TouchEvent) => {
  if (event instanceof MouseEvent) {
    (document.body as HTMLElement)?.removeEventListener('mousemove', updateMoveCoordinates);
    (document.body as HTMLElement)?.removeEventListener('mouseup', resetCardStatus);
  } else if (event instanceof TouchEvent) {
    (event.currentTarget as HTMLElement)?.removeEventListener('touchmove', updateMoveCoordinates);
    (event.currentTarget as HTMLElement)?.removeEventListener('touchend', resetCardStatus);
  }
};

/**
 * Resets the card status to its initial position
 * @param {MouseEvent | TouchEvent} event - The event that triggered the reset
 * @returns {void}
 */
const resetCardStatus = (event: MouseEvent | TouchEvent) => {
  if (motionIsReduced) {
    return;
  }

  isMouseDragging.value = false;
  if (isScrolling.value !== undefined) {
    isScrolling.value = undefined;
  }

  const swipeThreshold = getCurrentSwipeStatus();

  initialX.value = 0;
  initialY.value = 0;

  if (swipeThreshold && swipeThreshold.threshold > props.activationThresholdPercent) {
    if (swipeThreshold.direction === SwipeDirections.LEFT) {
      emit('solve-left');
    } else if (swipeThreshold.direction === SwipeDirections.RIGHT) {
      emit('solve-right');
    }
  }

  removeEventListener(event);

  currentRotationLimit.value = 0;

  currentX.value = 0;
  currentY.value = 0;

  transitionStyle.value = 'all 350ms cubic-bezier(0.175, 0.755, 0.32, 1.2), z-index 0s';
};

/**
 * Checks if the swipe threshold has been reached
 * @returns {SwipeEvent | undefined}- The swipe event if the threshold has been reached
 */
const getCurrentSwipeStatus = (): SwipeEvent | undefined => {
  currentActivationThreshold.value = Math.abs(
    clampedScale(
      [initialX.value, currentX.value < initialX.value ? 0 : window.innerWidth],
      [0, 100],
    )(currentX.value),
  );

  // Left swipe
  if (currentX.value < initialX.value) {
    return {
      direction: SwipeDirections.LEFT,
      threshold: currentActivationThreshold.value,
    };
    // Right swipe
  } else if (currentX.value > initialX.value) {
    return {
      direction: SwipeDirections.RIGHT,
      threshold: currentActivationThreshold.value,
    };
  }

  return undefined;
};

/**
 * Calculates the confidence of the current selection in percent
 * Uses the current swipe threshold and deadzone to calculate the confidence
 * Also maps the confidence to an exponential curve to make the selection more sensitive
 * @returns {number} - The confidence of the current selection
 */
// @TODO: Think about also adding velocity based momentum to the confidence calculation
const calculateSelectionConfidence = () => {
  const currentSwipeThreshold = getCurrentSwipeStatus();

  if (!currentSwipeThreshold || currentSwipeThreshold.threshold < props.activationDeadzone) {
    return 0;
  }

  const exponentiallyMappedConfidence = clampedExponentialMapper(
    [props.activationDeadzone, props.activationThresholdPercent],
    [0, 100],
  )(currentSwipeThreshold?.threshold || 0);

  return exponentiallyMappedConfidence;
};

/**
 * Updates the animation frame
 * @returns {void}
 */
const updateAnimationFrame = () => {
  requestAnimationFrame(() => {
    let rotationalDirectionFactor = 0;

    rotationalDirectionFactor =
      currentX.value < initialX.value
        ? currentY.value < rotationCenterY.value
          ? clampedScale([0, rotationCenterY.value], [-1, 0])(currentY.value) // left above
          : clampedScale([rotationCenterY.value, window.innerHeight], [0, 1])(currentY.value) // left below
        : currentY.value < rotationCenterY.value
          ? clampedScale([rotationCenterY.value, 0], [0, 1])(currentY.value) // right above
          : clampedScale([window.innerHeight, rotationCenterY.value], [-1, 0])(currentY.value); // right below

    const clampedScaledRotation =
      clampedScale(
        [initialX.value, currentX.value < initialX.value ? 0 : window.innerWidth],
        [0, currentRotationLimit.value],
      )(currentX.value) * rotationalDirectionFactor;

    const xDiff = (currentX.value - initialX.value) * props.horizontalScalingFactor;
    const yDiff = (currentY.value - initialY.value) * props.verticalScalingFactor;

    transformStyle.value = `translate3d(${xDiff}px,${yDiff}px,0) rotate(${clampedScaledRotation}deg)`;

    emit('confidenceUpdate', {
      direction: getCurrentSwipeStatus()?.direction,
      confidence: calculateSelectionConfidence(),
    } as SwipeConfidence);
  });
};

// Watchers
watch(currentX, updateAnimationFrame);
watch(currentY, updateAnimationFrame);
watch(isScrolling, () => emit('isScrolling', isScrolling.value), { immediate: true });
watch(isMouseDragging, () => emit('isMouseDragging', isMouseDragging.value), { immediate: true });

onBeforeUnmount(async () => {
  resetCardStatus({} as MouseEvent);
  resetCardStatus({} as TouchEvent);

  emit('confidenceUpdate', {
    direction: getCurrentSwipeStatus()?.direction,
    confidence: 0,
  } as SwipeConfidence);
});
</script>

<template>
  <div
    class="swipable"
    :class="{ 'swipable--initial': hasInitialAnimation }"
    @mousedown="startCardMove($event)"
    @mouseup="resetCardStatus($event)"
    @touchstart="startCardMove($event)"
    @touchend="resetCardStatus($event)"
    @touchcancel="resetCardStatus($event)"
    :style="{ transform: transformStyle, transition: transitionStyle }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.swipable {
  height: 100%;
  pointer-events: none;

  &.swipable--initial {
    animation: 1.5s cubic-bezier(0.175, 0.755, 0.32, 1.2) 0s 1 wiggle;
    transform-origin: 50% 70%;
  }

  & > * {
    pointer-events: auto;
  }
}

@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-3deg) translateX(-5%);
  }
  75% {
    transform: rotate(3deg) translateX(5%);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
