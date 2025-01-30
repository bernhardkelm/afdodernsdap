<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';

// Helpers
import { clampScale } from './helpers/scale';

// Components
import FooterComponent from '@/components/FooterComponent.vue';

// Store imports
import { useQuotesStore } from '@/stores/quotes';
import { SwipeDirections } from './types/SwipeDirections';

const quotesStore = useQuotesStore();

const defaultBackground: string = 'transparent';

const rgbaMap = computed((): string => {
  if (
    !quotesStore.currentSelectionConfidence ||
    quotesStore.currentSelectionConfidence?.confidence === 0
  ) {
    return defaultBackground;
  }

  const baseColor =
    quotesStore.currentSelectionConfidence?.direction === SwipeDirections.LEFT
      ? '--color-brand-nsdap-primary'
      : '--color-brand-afd-primary';

  const aVal = clampScale(
    [0, 100],
    [0, 25],
  )(quotesStore.currentSelectionConfidence?.confidence || 0);
  return `color-mix(in srgb, var(${baseColor}) ${aVal}%, transparent)`;
});

const top = ref();
const route = useRoute();

watch(
  () => route.path,
  () => {
    document.body.scrollTo(0, 0);
    top.value?.focus();
  },
)

</script>

<template>
  <div class="background-wrapper" :style="{ 'background-color': rgbaMap }" ref="top" tabindex="-1">
    <div class="content-wrapper">
      <RouterView />
      <FooterComponent />
    </div>
  </div>
</template>

<style scoped>
.content-wrapper {
  margin: 0 auto;
  min-height: 100vh;
  min-height: 100dvh;
  display: grid;
  grid-template-rows: minmax(0, 1fr) min-content;
  max-width: 450px;
}
.background-wrapper:focus {
  outline: none;
}
</style>
