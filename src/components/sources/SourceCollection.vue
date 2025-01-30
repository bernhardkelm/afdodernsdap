<script setup lang="ts">
// Types
import { SourceType } from '@/types/datasetTypes/Source';

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
</script>

<template>
  <section class="source-collection">
    <h2>Quellen-Übersicht.</h2>
    <ul>
      <template
        v-for="(source, sourceKey) in quotesStore.sortedQuoteSources"
        :key="`source-${sourceKey}`"
      >
        <BookSource v-if="source.type === SourceType.BOOK" :source="source" />
        <InBookSource v-if="source.type === SourceType.INBOOK" :source="source" />
        <ArticleSource v-else-if="source.type === SourceType.ARTICLE" :source="source" />
        <OnlineSource v-else-if="source.type === SourceType.ONLINE" :source="source" />
        <SocialMediaSource v-else-if="source.type === SourceType.SOCIAL_MEDIA" :source="source" />
        <VideoSource v-else-if="source.type === SourceType.VIDEO" :source="source" />
      </template>
    </ul>
  </section>
</template>

<style scoped>
.source-collection {
  width: 100%;

  ul {
    list-style-type: none;
    padding: 0;

    li {
      font-size: var(--font-size-small);
      line-height: 140%;
      margin-top: calc(2 * var(--padding-size-base));
    }

    li:first-child {
      margin-top: 0;
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
