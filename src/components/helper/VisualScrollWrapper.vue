<script setup lang="ts">
interface VisualScrollWrapperProps {
  preventPointerEvents?: boolean;
  preventTouchActions?: boolean;
}

const props = withDefaults(defineProps<VisualScrollWrapperProps>(), {
  preventPointerEvents: false,
  preventTouchActions: false,
});
</script>

<template>
  <div
    class="visual-scroll-wrapper"
    :class="{
      'prevent-pointer-events': props.preventPointerEvents,
      'prevent-touch-actions': props.preventTouchActions,
    }"
  >
    <slot></slot>
  </div>
</template>

<style>
.visual-scroll-wrapper {
  overflow: hidden;
  position: relative;

  & > * {
    padding: calc(5 * var(--padding-size-base));
    overflow-y: scroll;
    max-height: 100%;

    &.prevent-pointer-events > * {
      pointer-events: none;
    }

    &.prevent-touch-actions > * {
      touch-action: none;
    }
  }

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(5 * var(--padding-size-base));
    background: linear-gradient(transparent, var(--color-background-secondary));
  }

  &::before {
    top: 0;
    bottom: auto;
    background: linear-gradient(var(--color-background-secondary), transparent);
  }
}
</style>
