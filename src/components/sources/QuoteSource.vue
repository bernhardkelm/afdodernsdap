<script setup lang="ts">
// Types
import { SourceType } from '@/types/datasetTypes/Source';
import { computed } from 'vue';

// Components
import BookSource from '@/components/sources/BookSource.vue';
import InBookSource from '@/components/sources/InBookSource.vue';
import VideoSource from '@/components/sources/VideoSource.vue';
import ArticleSource from './ArticleSource.vue';
import OnlineSource from './OnlineSource.vue';
import SocialMediaSource from './SocialMediaSource.vue';

// Stores
import { useQuotesStore } from '@/stores/quotes';

const quotesStore = useQuotesStore();

const disableQuoteLink = computed(
  () => quotesStore.currentQuote && quotesStore.currentQuote.selectedAnswer === null,
);
</script>

<template>
  <section class="quote-sources">
    <!-- Return the sources for the last answered quote -->
    <ul>
      <template
        v-for="(source, key) in quotesStore.lastAnsweredQuote?.sources"
        :key="`source-${key}`"
      >
        <BookSource
          v-if="source.type === SourceType.BOOK"
          :source="source"
          :disableLink="disableQuoteLink"
        />
        <InBookSource
          v-if="source.type === SourceType.INBOOK"
          :source="source"
          :disableLink="disableQuoteLink"
        />
        <ArticleSource
          v-else-if="source.type === SourceType.ARTICLE"
          :source="source"
          :disableLink="disableQuoteLink"
        />
        <OnlineSource
          v-else-if="source.type === SourceType.ONLINE"
          :source="source"
          :disableLink="disableQuoteLink"
        />
        <SocialMediaSource
          v-else-if="source.type === SourceType.SOCIAL_MEDIA"
          :source="source"
          :disableLink="disableQuoteLink"
        />
        <VideoSource
          v-else-if="source.type === SourceType.VIDEO"
          :source="source"
          :disableLink="disableQuoteLink"
        />
      </template>
    </ul>
  </section>
</template>

<style scoped>
.quote-sources {
  width: 100%;

  ul {
    list-style-type: none;
    padding: 0;

    li {
      font-size: var(--font-size-small);
      line-height: 140%;
      margin-top: calc(2 * var(--padding-size-base));
    }
  }

  & :deep(b) {
    font-weight: bold;
  }

  & :deep(a) {
    color: var(--color-text);
    word-break: break-all;
    pointer-events: all;

    &:hover {
      color: var(--color-link-hover);
    }

    &:focus-visible {
      color: var(--color-link-hover);
      text-decoration: none;
      outline: none;
    }
  }
}
</style>
