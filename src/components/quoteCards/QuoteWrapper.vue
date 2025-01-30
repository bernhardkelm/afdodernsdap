<script setup lang="ts">
import { computed } from 'vue';

// Types
import { Parties } from '@/types';

// Components
import CardComponent from '@/components/quoteCards/CardComponent.vue';

// Stores
import { useQuotesStore } from '@/stores/quotes';

const quotesStore = useQuotesStore();

// Constants
const baseTopText = 'Von welcher Partei stammt folgendes Zitat?';
const correctTopText = 'Dein Tipp war richtig.';
const wrongTopText = 'Dein Tipp war falsch.';
const allCorrectTopText = 'Beide Parteien sind korrekt.';

// Computed
/**
 * Get the current top text based on the last answer.
 */
const currentTopText = computed(() => {
  if (quotesStore.currentQuote && quotesStore.currentQuote.selectedAnswer) {
    return quotesStore.lastAnsweredQuoteContainsParty(Parties.AFD) &&
      quotesStore.lastAnsweredQuoteContainsParty(Parties.NSDAP)
      ? allCorrectTopText
      : quotesStore.lastAnsweredQuoteContainsParty(quotesStore.currentQuote.selectedAnswer)
        ? correctTopText
        : wrongTopText;
  }
  return baseTopText;
});
</script>

<template>
  <div class="quote-wrapper">
    <p class="quote-question">{{ currentTopText }}</p>
    <div class="card-wrapper">
      <CardComponent />
    </div>
  </div>
</template>

<style scoped>
.quote-wrapper {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 0;

  .quote-question {
    font-size: var(--font-size-text);
    text-align: center;
    padding: calc(4 * var(--padding-size-base)) calc(2 * var(--padding-size-base));
    padding-bottom: 0;
  }

  .card-wrapper {
    height: 100%;
    min-height: 0;
    max-height: 675px;
    align-self: center;
    padding: calc(5 * var(--padding-size-base));
  }
}
</style>
