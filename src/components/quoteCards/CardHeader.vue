<script setup lang="ts">
import { computed } from 'vue';

// Types
import { Parties } from '@/types';

// Stores
import { useQuotesStore } from '@/stores/quotes';

const quotesStore = useQuotesStore();

// Constants
const baseTopText = '-';
const correctTopText = 'Korrekt!';
const wrongTopText = 'Nein! Nein! Nein!';

/**
 * Get the current top text based on the last answer.
 */
const currentTopText = computed(() => {
  if (quotesStore.lastAnsweredQuoteWasCorrect() === true) {
    return correctTopText;
  } else if (quotesStore.lastAnsweredQuoteWasCorrect() === false) {
    return wrongTopText;
  }

  return baseTopText;
});
</script>

<template>
  <div class="card-header--wrapper">
    <div
      v-if="quotesStore.lastAnsweredQuoteContainsParty(Parties.NSDAP)"
      class="card-header card-header--nsdap"
      :class="{
        isSplit:
          quotesStore.lastAnsweredQuoteContainsParty(Parties.NSDAP) &&
          quotesStore.lastAnsweredQuoteContainsParty(Parties.AFD),
      }"
    >
      <span>{{ currentTopText }}</span>
    </div>
    <div
      v-else-if="quotesStore.lastAnsweredQuoteContainsParty(Parties.AFD)"
      class="card-header card-header--afd"
    >
      <span>{{ currentTopText }}</span>
    </div>
  </div>
</template>

<style scoped>
.card-header--wrapper {
  position: relative;
}

.card-header {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  pointer-events: none;

  span {
    font-family: UnifrakturCook, serif;
    font-size: calc(9.5 * var(--font-size-base));
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: relative;
    user-select: none;
    pointer-events: none;
  }

  &.card-header--afd {
    background: var(--color-brand-afd-primary);
    color: var(--color-brand-afd-text);

    ::after {
      display: block;
      content: '';
      width: 100%;
      height: var(--padding-size-base);
      background-color: var(--color-brand-afd-secondary);
      margin-top: calc(-1 * var(--padding-size-base));
    }
  }

  &.card-header--nsdap {
    background: var(--color-brand-nsdap-primary);
    color: var(--color-brand-nsdap-text);

    &.isSplit {
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--color-brand-afd-primary);
        clip-path: var(--clip-path-split);
      }
    }

    span {
      background: var(--color-brand-nsdap-secondary);
      padding: var(--padding-size-base);
      z-index: 1;
    }
  }
}
</style>
