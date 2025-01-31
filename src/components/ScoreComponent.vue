<script setup lang="ts">
// Components
import IconComponent from '@/components/helper/IconComponent.vue';

// Types
import { Parties, type SelectedQuote } from '@/types';

// Store imports
import { useQuotesStore } from '@/stores/quotes';

const quotesStore = useQuotesStore();

// Props
interface ScoreComponentProps {
  isInteractable: boolean;
}

const props = withDefaults(defineProps<ScoreComponentProps>(), {
  isInteractable: false,
});

// Methods
/**
 * Check if the quote contains a specific party.
 * @param {SelectedQuote} quote The quote to check.
 * @param {Parties} party  The party to check for.
 * @returns {boolean} Whether the quote contains the party.
 */
const quoteContainsParty = (quote: SelectedQuote, party: Parties): boolean => {
  return quote.owner.some((owner) => owner.person.party === party);
};

/**
 * Get the text content for the pill.
 * @param {SelectedQuote} quote The quote to get the pill text content for.
 * @returns {string} The pill text content.
 */
const pillTextContent = (quote: SelectedQuote): string => {
  if (quote.selectedAnswer === null) {
    return '?';
  }

  if (quoteContainsParty(quote, Parties.NSDAP) && quoteContainsParty(quote, Parties.AFD)) {
    return 'N/A';
  }

  return quoteContainsParty(quote, Parties.NSDAP) ? 'N' : 'A';
};

const highlightQuote = (quote: SelectedQuote): void => {
  quotesStore.currentlyHighlightedQuote = quote;
};
</script>

<template>
  <div class="score">
    <div class="score-bar" v-for="(quote, index) in quotesStore.selectedQuotes" :key="index">
      <div class="score-bar-inner">
        <!-- Display the answer pill -->
        <span
          class="score-bar-pill"
          :class="{ isInteractable: props.isInteractable }"
          @click="props.isInteractable && highlightQuote(quote)"
        >
          <span v-if="!quote.selectedAnswer" class="score-bar-pill-default">
            {{ pillTextContent(quote) }}
          </span>
          <template v-else>
            <span v-if="quoteContainsParty(quote, Parties.NSDAP)" class="score-bar-pill-nsdap">
              {{ pillTextContent(quote) }}
            </span>
            <span
              v-if="quoteContainsParty(quote, Parties.AFD)"
              class="score-bar-pill-afd"
              :class="{ isSplit: quoteContainsParty(quote, Parties.NSDAP) }"
            >
              {{ pillTextContent(quote) }}
            </span>
          </template>
        </span>

        <IconComponent
          v-if="quote.selectedAnswer"
          :name="quoteContainsParty(quote, quote.selectedAnswer) ? 'check' : 'dangerous'"
        />
        <IconComponent v-else name="empty" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.score {
  display: flex;
  justify-content: center;
  padding: calc(5 * var(--padding-size-base));
  padding-bottom: 0;

  .score-bar {
    width: 100%;
    margin-top: calc(2 * var(--padding-size-base));

    .score-bar-inner {
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      gap: var(--padding-size-base);
    }

    .score-bar-pill {
      position: relative;
      overflow: hidden;
      height: calc(3.5 * var(--font-size-base));
      width: calc(5 * var(--padding-size-base));
      background: var(--color-background-tertiary);
      color: var(--color-white);
      border-radius: var(--padding-size-base);
      font-size: var(--font-size-small);

      &.isInteractable {
        cursor: pointer;
      }

      & > span {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: calc(0.25 * var(--padding-size-base));

        &.isSplit {
          clip-path: var(--clip-path-split);
        }
      }
    }

    .score-bar-pill-nsdap {
      background: var(--color-brand-nsdap-primary);
    }

    .score-bar-pill-afd {
      background: var(--color-brand-afd-primary);
      color: var(--color-black);
    }
  }
}
</style>
