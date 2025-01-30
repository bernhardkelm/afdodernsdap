<script setup lang="ts">
interface IconProps {
  name: string;
  color?: string | null;
  animation?: string;
  noZindex?: boolean;
}

const props = withDefaults(defineProps<IconProps>(), {
  name: undefined,
  color: 'black',
  animation: undefined,
  noZindex: false,
});

const getAssetsFile = (url: string) => {
  // Unfortunatly we can't use absolute paths or '@' paths in the template
  return `"${new URL(`../../assets/icons/${url}.svg`, import.meta.url).href}"`;
};
</script>

<template>
  <div
    class="icon"
    :style="{ maskImage: `url(${getAssetsFile(props.name)})` }"
    :class="{
      black: props.color === 'black',
      white: props.color === 'white',
      isSpinning: props.animation === 'spin',
      'no-z-index': props.noZindex,
    }"
    aria-hidden="true"
  ></div>
</template>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.icon {
  margin: 0;
  display: inline-block;
  width: calc(5 * var(--font-size-base));
  height: calc(5 * var(--font-size-base));
  background-size: contain;
  mask-size: contain;

  &.black {
    background-color: var(--color-text);
  }

  &.white {
    background-color: var(--color-text-reverse);
  }

  &.isSpinning {
    animation: spin 1s infinite ease-in-out;
  }

  &.no-z-index {
    position: relative;
    z-index: -1;
  }
}
</style>
