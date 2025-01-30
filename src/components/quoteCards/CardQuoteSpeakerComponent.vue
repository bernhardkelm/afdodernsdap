<script setup lang="ts">
// Stores
import { useQuotesStore } from '@/stores/quotes';

const quotesStore = useQuotesStore();
</script>

<template>
  <section class="quote-speaker">
    <template v-for="(owner, key) in quotesStore.lastAnsweredQuote?.owner" :key="`speaker-${key}`">
      <p>
        <span class="quote-speaker-label">Sprecher*in:</span>
        {{ owner.person.name }}
      </p>
      <p>
        <span class="quote-speaker-label">Parteimitglied:</span>
        {{ owner.person.party }}
      </p>
      <p v-if="owner.person.position">
        <span class="quote-speaker-label">Position:</span>
        {{ owner.person.position }}
      </p>
      <p>
        <span class="quote-speaker-label">Datum:</span>
        {{ owner.saidOn }}
      </p>
      <p v-if="owner.context">
        <span class="quote-speaker-label">Kontext:</span>
        {{ owner.context }}
      </p>
      <hr />
    </template>
  </section>
</template>

<style scoped>
.quote-speaker {
  margin-top: calc(2 * var(--padding-size-base));
  font-size: var(--font-size-text);
  width: 100%;

  & > * {
    line-height: 140%;
  }

  .quote-speaker-label {
    font-weight: bold;
  }

  hr {
    margin: calc(2 * var(--padding-size-base)) 0;
    border: none;
    border-top: 1px solid var(--color-background);
    width: 100%;
  }
}
</style>
