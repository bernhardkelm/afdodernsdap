<script setup lang="ts">
import { computed } from 'vue';

// Types
import { Parties } from '@/types/datasetTypes/Parties';
import { CONFIG } from '@/types/config';
import { SwipeDirections } from '@/types/SwipeDirections';

// Helpers
import { clampScale } from '@/helpers/scale';

// Store imports
import { useQuotesStore } from '@/stores/quotes';

const quotesStore = useQuotesStore();

// Computed
const opacityMap = computed(
  (): number =>
    100 - clampScale([0, 100], [0, 70])(quotesStore.currentSelectionConfidence?.confidence || 0),
);
const grayScaleMap = computed((): number =>
  clampScale([0, 100], [0, 100])(quotesStore.currentSelectionConfidence?.confidence || 0),
);

const currentSwipedParty = computed((): Parties | null => {
  if (quotesStore.currentSelectionConfidence?.direction === SwipeDirections.LEFT) {
    return Parties.NSDAP;
  }

  if (quotesStore.currentSelectionConfidence?.direction === SwipeDirections.RIGHT) {
    return Parties.AFD;
  }

  return null;
});

const afdPartyStyles = computed(() => {
  const opacity = currentSwipedParty.value === Parties.NSDAP ? `${opacityMap.value}%` : '100%';
  const filter =
    currentSwipedParty.value === Parties.NSDAP ? `grayscale(${grayScaleMap.value}%)` : 'none';
  return {
    opacity,
    filter,
  };
});

const nsdapPartyStyles = computed(() => {
  const opacity = currentSwipedParty.value === Parties.AFD ? `${opacityMap.value}%` : '100%';
  const filter =
    currentSwipedParty.value === Parties.AFD ? `grayscale(${grayScaleMap.value}%)` : 'none';
  return {
    opacity,
    filter,
  };
});

// Methods
const checkAnswer = (event: Event, party: Parties) => {
  event.stopPropagation();
  // Reset the confidence to remove background color when used with keyboard or click
  quotesStore.currentSelectionConfidence = null;

  if (quotesStore.answeredQuotesCount === CONFIG.MAX_QUESTION_COUNT) {
    return;
  }

  quotesStore.solveCurrentQuote(party);
};

const setHoverAndFocus = (party?: 'nsdap' | 'afd') => {
  if (quotesStore.currentQuote && quotesStore.currentQuote.selectedAnswer !== null) {
    // If the Selector is on the backside of the card, don't show the hover/focus state
    return;
  }
  if (!party) {
    quotesStore.currentSelectionConfidence = null;
    return;
  }

  quotesStore.currentSelectionConfidence = {
    confidence: 100,
    direction: party === 'nsdap' ? SwipeDirections.LEFT : SwipeDirections.RIGHT,
  };
};
</script>

<template>
  <!-- @TODO: Hover state for buttons to reflect pressing -->
  <div class="party-selector">
    <button
      class="button-nsdap"
      @click="checkAnswer($event, Parties.NSDAP)"
      :style="nsdapPartyStyles"
      title="NSDAP als Antwort wählen"
      @mouseover="setHoverAndFocus('nsdap')"
      @focusin="setHoverAndFocus('nsdap')"
      @mouseout="setHoverAndFocus()"
      @focusout="setHoverAndFocus()"
      :disabled="quotesStore.currentQuote && quotesStore.currentQuote.selectedAnswer !== null"
      :tabindex="
        quotesStore.currentQuote && quotesStore.currentQuote.selectedAnswer !== null ? -1 : 1
      "
    >
      <span aria-hidden="true">NSDAP</span>
    </button>
    <button
      class="button-afd"
      @click="checkAnswer($event, Parties.AFD)"
      :style="afdPartyStyles"
      title="AfD als Antwort wählen"
      @mouseover="setHoverAndFocus('afd')"
      @focusin="setHoverAndFocus('afd')"
      @mouseout="setHoverAndFocus()"
      @focusout="setHoverAndFocus()"
      :disabled="quotesStore.currentQuote && quotesStore.currentQuote.selectedAnswer !== null"
      :tabindex="
        quotesStore.currentQuote && quotesStore.currentQuote.selectedAnswer !== null ? -1 : 1
      "
    >
      <span aria-hidden="true">AfD</span>
    </button>
  </div>
</template>

<style scoped>
.party-selector {
  display: flex;
  justify-content: center;
  align-items: center;

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
    height: 100%;
    flex-grow: 1;
    flex-basis: 0;

    span {
      display: inline-block;
      font-family: 'Geomanist', sans-serif;
      font-weight: 900;
      font-size: var(--font-size-brand);
      user-select: none;
      pointer-events: none;
    }
    &:hover {
      cursor: pointer;
    }
    &:focus-visible {
      outline: none;
    }
  }

  .button-nsdap {
    background-color: var(--color-brand-nsdap-primary);
    color: var(--color-brand-nsdap-text);

    span {
      background: var(--color-brand-nsdap-secondary);
      line-height: normal;
      text-align: center;
      padding: calc(2.5 * var(--padding-size-base)) var(--padding-size-base);
      padding-bottom: calc(0.75 * var(--padding-size-base));
    }
  }

  .button-afd {
    background-color: var(--color-brand-afd-primary);
    color: var(--color-brand-afd-text);

    span::after {
      display: block;
      content: '';
      width: 100%;
      height: var(--padding-size-base);
      background-color: var(--color-brand-afd-secondary);
      margin-top: calc(-1 * var(--padding-size-base));
    }
  }
}
</style>
