<script setup lang="ts">
// Stores
import { useQuotesStore } from '@/stores/quotes';

// Components
import Score from '@/components/ScoreComponent.vue';
import QuoteWrapper from '@/components/quoteCards/QuoteWrapper.vue';

const store = useQuotesStore();

// Generate initial quote block selection
store.generateQuoteBlocks();
</script>

<template>
  <main class="quiz">
    <!-- Score wrapper -->
    <Score :isInteractable="false" />

    <!-- Quote card wrapper -->
    <QuoteWrapper />
  </main>
</template>

<style scoped>
.quiz {
  display: grid;
  grid-template-rows: min-content 1fr;
}
</style>
