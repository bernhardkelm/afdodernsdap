import { computed, ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { Parties, type Quote, type SelectedQuote } from '@/types';
import router, { ROUTE_NAMES } from '@/router';
import quoteData from '@/dataSets/quoteData';
import type { SwipeConfidence } from '@/types/SwipeConfidence';
import type { Source } from '@/types/datasetTypes/Source';

export const useQuotesStore = defineStore('quotes', () => {
  /**
   * All possible quotes
   * @type {Quote[]}
   */
  const quotes = ref(quoteData);

  /**
   * Selected quotes
   * @type {SelectedQuote[]}
   */
  const selectedQuotes = ref<SelectedQuote[]>([]);

  const currentSelectionConfidence = ref<SwipeConfidence | null>(null);

  const cardFrontRef = ref<HTMLElement | null>(null);
  const cardBackRef = ref<HTMLElement | null>(null);

  const setCardRefs = (front: Ref<HTMLElement | null>, back: Ref<HTMLElement | null>) => {
    cardFrontRef.value = front.value;
    cardBackRef.value = back.value;
  };

  /**
   * Current quote
   * @type {SelectedQuote}
   */
  const currentQuote = computed(() => {
    // Quote that has been answere but not yet dismissed
    const answeredQuote = selectedQuotes.value.filter(
      (quote) => quote.selectedAnswer !== null && quote.dismissed === false,
    )[0];

    if (answeredQuote) {
      return answeredQuote;
    }

    // Quote that has not been answered yet
    const unansweredQuote = selectedQuotes.value.filter(
      (quote) => quote.selectedAnswer === null && quote.dismissed === null,
    )[0];

    if (unansweredQuote) {
      return unansweredQuote;
    }

    return undefined;
  });

  /**
   * Last answered quote
   * @type {SelectedQuote}
   */
  const lastAnsweredQuote = computed(() => {
    const answeredQuotes = selectedQuotes.value.filter((quote) => quote.selectedAnswer !== null);

    return answeredQuotes[answeredQuotes.length - 1] || null;
  });

  /**
   * Number of answered quotes
   * @type {number}
   */
  const answeredQuotesCount = computed(
    () => selectedQuotes.value.filter((quote) => quote.selectedAnswer !== null).length,
  );

  /**
   * All quote sources in alphabetical order by key
   * @type {Source[]}
   */
  const sortedQuoteSources = computed<Source[]>(() => {
    return quotes.value.flatMap((quote) => quote.sources).sort((a, b) => a.id.localeCompare(b.id));
  });

  /**
   * Generates 10 random quotes
   * One will always have two parties, the other 9 will have only one party
   * and be selected randomly
   * @returns {void}
   */
  function generateQuoteBlocks() {
    const afdPartyQuotes = quotes.value
      .filter((quote) => quoteContainsOnlyOneParty(quote, Parties.AFD))
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    const nsdapPartyQuotes = quotes.value
      .filter((quote) => quoteContainsOnlyOneParty(quote, Parties.NSDAP))
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);

    // Get 1 quote with two parties
    const quoteWithTwoPartiesShuffled = quotes.value
      .filter((quote) => quote.owner.map((owner) => owner.person.party).length > 1)
      .sort(() => Math.random() - 0.5)
      .slice(0, 1);

    // Combine the two arrays and shuffle them
    const shuffledQuotes = [
      ...afdPartyQuotes,
      ...nsdapPartyQuotes,
      ...quoteWithTwoPartiesShuffled,
    ].sort(() => Math.random() - 0.5);

    const shuffledQuotesWithAnswer: SelectedQuote[] = shuffledQuotes.map(
      (quote): SelectedQuote => ({
        ...quote,
        selectedAnswer: null,
        dismissed: null,
      }),
    );
    selectedQuotes.value = shuffledQuotesWithAnswer.slice(0, 10);
  }

  /**
   * Solves the current quote
   * @param {Parties} answer - The selected answer
   * @returns {void}
   */
  function solveCurrentQuote(answer: Parties) {
    if (!currentQuote.value) {
      return;
    }
    // Focus the card so the keyboarduser is not at the end of the card and would focus the footer next
    cardBackRef.value?.focus();

    const quoteToMutate = currentQuote.value
      ? selectedQuotes.value.find((quote) => quote.quote === currentQuote.value?.quote)
      : undefined;

    if (!quoteToMutate) {
      return;
    }

    quoteToMutate.dismissed = false;
    quoteToMutate.selectedAnswer = answer;
  }

  /**
   * Dismisses the current card
   * @returns {void}
   */
  function dismissCurrentCard() {
    if (!currentQuote.value) {
      return;
    }

    // Focus the card so the keyboarduser is not at the end of the card and would focus the footer next
    cardFrontRef.value?.focus();

    const quoteToMutate = currentQuote.value
      ? selectedQuotes.value.find((quote) => quote.quote === currentQuote.value?.quote)
      : undefined;

    if (!quoteToMutate) {
      return;
    }

    quoteToMutate.dismissed = true;

    // If we have dismissed the last card we want to redirect to the share page
    if (currentQuote.value === undefined) {
      router.push({ name: ROUTE_NAMES.SHARE });
    }
  }

  /**
   * Returns the current score
   * @returns {number}
   */
  function getCurrentScore(): number {
    return selectedQuotes.value.filter(
      (quote) =>
        quote.selectedAnswer &&
        quote.owner.some((owner) => owner.person.party === quote.selectedAnswer),
    ).length;
  }

  /**
   * Returns whether a quote contains only one specific party
   * @param {Quote} quote - The quote to check
   * @param {Parties} party - The party to check for
   * @returns {boolean}
   */
  function quoteContainsOnlyOneParty(quote: Quote, party: Parties): boolean {
    return (
      quote.owner.filter((owner) => owner.person.party === party).length === quote.owner.length
    );
  }

  /**
   * Returns whether the last answered quote contains a specific party
   * @param {Parties} party - The party to check for
   * @returns {boolean}
   */
  function lastAnsweredQuoteContainsParty(party: Parties): boolean {
    return (
      lastAnsweredQuote.value?.owner.filter((owner) => owner.person.party === party).length > 0
    );
  }

  /**
   * Returns whether the last answered quote was correct
   * @returns {(boolean | null)}
   */
  function lastAnsweredQuoteWasCorrect(): boolean | null {
    return (
      lastAnsweredQuote.value?.selectedAnswer &&
      lastAnsweredQuoteContainsParty(lastAnsweredQuote.value.selectedAnswer)
    );
  }

  return {
    selectedQuotes,
    currentSelectionConfidence,
    currentQuote,
    lastAnsweredQuote,
    sortedQuoteSources,
    answeredQuotesCount,
    generateQuoteBlocks,
    solveCurrentQuote,
    dismissCurrentCard,
    getCurrentScore,
    lastAnsweredQuoteContainsParty,
    lastAnsweredQuoteWasCorrect,
    setCardRefs,
    cardFrontRef,
    cardBackRef,
  };
});
