<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, type CSSProperties, type Ref } from 'vue';

// Types
import type { SwipeConfidence } from '@/types/SwipeConfidence';
import { Parties } from '@/types';

// Components
import PartySelector from '@/components/quoteCards/PartySelector.vue';
import SwipableComponent from '@/components/helper/SwipableComponent.vue';
import CardQuoteSpeakerComponent from '@/components/quoteCards/CardQuoteSpeakerComponent.vue';
import IconComponent from '@/components/helper/IconComponent.vue';
import CardHeader from '@/components/quoteCards/CardHeader.vue';
import QuoteSource from '@/components/sources/QuoteSource.vue';
import VisualScrollWrapper from '@/components/helper/VisualScrollWrapper.vue';

// Stores
import { useQuotesStore } from '@/stores/quotes';

const quotesStore = useQuotesStore();

const isScrolling: Ref<undefined | boolean> = ref(undefined);
const isMouseDragging: Ref<boolean> = ref(false);
const cardContentBack = ref<HTMLElement | null>(null);

// Variables
const overflowStyle = ref('auto');
const touchActionStyle = ref('auto');
const userSelectStyle = ref('auto');
const isBeingAnimated = ref(false);

// Methods
/**
 * Map the swipe progress to a parties.
 * @param {SwipeConfidence | undefined} swipe The swipe progress.
 * @returns {void}
 */
const mapSwipeProgressToParty = (swipe: SwipeConfidence | undefined) => {
  if (!swipe) {
    quotesStore.currentSelectionConfidence = null;
    return;
  }

  quotesStore.currentSelectionConfidence = swipe;
};

/**
 * Solve the current card with the given parties.
 * @param {Parties} parties The parties to solve the card with.
 * @returns {void}
 */
const solveCard = (parties?: Parties) => {
  isBeingAnimated.value = true;

  setTimeout(() => {
    isBeingAnimated.value = false;
  }, 750);

  if (!parties) {
    quotesStore.dismissCurrentCard();
    return;
  } else if (quotesStore.currentQuote && !quotesStore.currentQuote.selectedAnswer) {
    quotesStore.solveCurrentQuote(parties);
    return;
  }
  quotesStore.dismissCurrentCard();
};

// Watchers
/**
 * Watch the scrolling state to prevent scrolling while dragging.
 */
watch(
  isScrolling,
  (value) => {
    if (value === false) {
      overflowStyle.value = 'hidden';
      touchActionStyle.value = 'none';
      userSelectStyle.value = 'none';
    } else {
      overflowStyle.value = 'scroll';
      touchActionStyle.value = 'auto';
      userSelectStyle.value = 'auto';
    }
  },
  {
    immediate: true,
  },
);

// Create Refs for the card front and back
const cardFront = ref<HTMLElement | null>(null);
const cardBack = ref<HTMLElement | null>(null);

// Pass the card refs to the store
onMounted(() => {
  quotesStore.setCardRefs(cardFront, cardBack);
});

// Remove the card refs from the store, cause the component will be unmounted
onBeforeUnmount(() => {
  cardFront.value = null;
  cardBack.value = null;
  quotesStore.setCardRefs(cardFront, cardBack);
});

/**
 * Watch the mouse dragging state to prevent text selection while dragging.
 */
watch(
  isMouseDragging,
  (value) => {
    userSelectStyle.value = value ? 'none' : 'auto';
  },
  { immediate: true },
);

// Watch for change of the current quote to scroll card back back to top.
watch(
  () => quotesStore.currentQuote,
  () => {
    // Timeout to wait for the card to flip.
    setTimeout(() => {
      if (cardContentBack.value) {
        cardContentBack.value.scrollTo({
          top: 0,
        });
      }
    }, 800);
  },
);
</script>

<template>
  <SwipableComponent
    @confidenceUpdate="mapSwipeProgressToParty"
    @solve-left="solveCard(Parties.NSDAP)"
    @solve-right="solveCard(Parties.AFD)"
    @isScrolling="isScrolling = $event"
    @isMouseDragging="isMouseDragging = $event"
    :activationDeadzone="20"
    :activationThresholdPercent="50"
    :maxRotation="15"
    :horizontalScalingFactor="0.4"
    :verticalScalingFactor="0.5"
  >
    <!-- Card Front -->
    <div
      class="card"
      :class="{
        solved: quotesStore.currentQuote && !!quotesStore.currentQuote.selectedAnswer,
        'solved--left':
          quotesStore.currentQuote && quotesStore.currentQuote.selectedAnswer === Parties.NSDAP,
        'solved--right':
          quotesStore.currentQuote && quotesStore.currentQuote.selectedAnswer === Parties.AFD,
      }"
    >
      <div class="card__face card__face--front" ref="cardFront" tabindex="-1">
        <!-- Scrollable Card Content -->
        <VisualScrollWrapper>
          <p
            class="card-content"
            :style="
              {
                'overflow-y': overflowStyle,
                'touch-action': touchActionStyle,
                'user-select': userSelectStyle,
              } as CSSProperties
            "
          >
            {{ quotesStore.currentQuote?.quoteDisplay || quotesStore.currentQuote?.quote || '-' }}
          </p>
        </VisualScrollWrapper>
        <!-- Card Footer -->
        <PartySelector :class="{ notInteractable: isBeingAnimated }" />
      </div>
      <!-- Card Back -->
      <div class="card__face card__face--back" ref="cardBack" tabindex="-1">
        <!-- Card Header -->
        <CardHeader />
        <!-- Scrollable card content -->
        <VisualScrollWrapper>
          <div
            ref="cardContentBack"
            class="card-content"
            :style="
              {
                'overflow-y': overflowStyle,
                'touch-action': touchActionStyle,
                'user-select': userSelectStyle,
              } as CSSProperties
            "
          >
            <p class="card-content--quote">
              {{
                quotesStore.lastAnsweredQuote?.quote ||
                quotesStore.lastAnsweredQuote?.quoteDisplay ||
                '-'
              }}
            </p>
            <CardQuoteSpeakerComponent />
            <QuoteSource />
          </div>
        </VisualScrollWrapper>
        <!-- Card Footer -->
        <div class="card__face--footer" :class="{ notInteractable: isBeingAnimated }">
          <button
            @click="solveCard()"
            :disabled="quotesStore.currentQuote && quotesStore.currentQuote.selectedAnswer === null"
            :tabindex="
              quotesStore.currentQuote && quotesStore.currentQuote.selectedAnswer === null ? -1 : 1
            "
          >
            {{
              quotesStore.answeredQuotesCount !== quotesStore.selectedQuotes.length
                ? 'Nächstes Zitat...'
                : 'Zum Ergebnis...'
            }}
            <IconComponent name="next" color="white" />
          </button>
        </div>
      </div>
    </div>
  </SwipableComponent>
</template>

<style scoped>
.card {
  --flip-transition-duration: 0.75s;
  height: 100%;
  font-size: var(--font-size-accent);
  touch-action: none;
  position: relative;
  transition: transform var(--flip-transition-duration) cubic-bezier(1, 0, 0, 1);
  transform-style: preserve-3d;

  .card__face {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: calc(2 * var(--padding-size-base));
    box-shadow:
      0px 1px 2px 0px rgba(0, 0, 0, 0.3),
      0px 2px 6px 2px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    background: var(--color-background-secondary);
    display: grid;
    backface-visibility: hidden;
    transition: z-index 0s linear;
    transition-delay: var(--flip-transition-duration);

    &.card__face--front {
      grid-template-rows: 1fr minmax(calc(15 * var(--padding-size-base)), 20%);
      z-index: 10;
    }

    &.card__face--back {
      z-index: 9;
      grid-template-rows: minmax(calc(15 * var(--padding-size-base)), 20%) 1fr min-content;
      transform: rotateY(180deg);
    }
    &:focus {
      outline: none;
    }

    .card-content {
      padding: calc(5 * var(--padding-size-base));
      font-weight: 400;
      line-height: 140%;
      overflow-y: scroll;
      max-height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      & > * {
        pointer-events: none;
        touch-action: none;
      }
    }
  }

  &.solved {
    .card__face--front {
      z-index: 9;
      transition-delay: 0s;
    }

    .card__face--back {
      z-index: 10;
      transition-delay: 0s;
    }
  }

  &.solved--left {
    transform: rotateY(-180deg);
  }

  &.solved--right {
    transform: rotateY(180deg);
  }
}

.card__face--footer {
  background-color: var(--color-text);
  display: flex;
  touch-action: none;

  button {
    /*Reset's every elements apperance*/
    background: none repeat scroll 0 0 transparent;
    border: medium none;
    border-spacing: 0;
    list-style: none outside none;
    margin: 0;
    padding: 0;
    text-align: center;
    text-decoration: none;
    text-indent: 0;

    /* Custom styles */
    display: flex;
    justify-content: center;
    font-family: 'Geomanist', sans-serif;
    font-size: var(--font-size-text);
    line-height: 140%;
    flex-grow: 1;
    flex-basis: 0;
    color: var(--color-background);
    padding: calc(2 * var(--padding-size-base));
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: var(--color-bg-next-button-hover);
      outline: none;
    }

    div {
      margin-left: calc(2 * var(--padding-size-base));
    }
  }
}

.notInteractable {
  pointer-events: none;
  touch-action: none;
}
</style>
