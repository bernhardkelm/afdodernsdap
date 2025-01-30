<script setup lang="ts">
import { type Source } from '@/types/datasetTypes/Source';
import { computed } from 'vue';

interface ButtonProps {
  source: Source;
  disableLink?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  source: undefined,
  disableLink: false,
});

// Computed
const combinedAuthorString = computed(() => {
  if (!props.source.authors || props.source.authors.length === 0) {
    return undefined;
  }

  return props.source.authors
    .map((author) => {
      return author;
    })
    .join(' und ');
});
</script>

<template>
  <li>
    <b>[{{ props.source.id }}] </b>
    <template v-if="combinedAuthorString">{{ combinedAuthorString }}. </template>
    <template v-if="props.source.location">{{ props.source.location }}. </template>
    <template v-if="props.source.publisher">
      Herausgegeben von: {{ props.source.publisher }}. </template
    >{{ props.source.title }}.
    <template v-if="props.source.date">({{ props.source.date }}) </template>
    <template v-if="props.source.publishingFormat">[{{ props.source.publishingFormat }}] </template>
    <template v-if="props.source.url"
      >Verfügbar unter:
      <a
        :href="props.source.url"
        target="_blank"
        :disabled="props.disableLink"
        :tabindex="props.disableLink ? -1 : 1"
        >{{ props.source.url }}</a
      >.
    </template>
    <template v-if="props.source.lastAccessed">
      (Zuletzt abgerufen: {{ props.source.lastAccessed }})</template
    >.
  </li>
</template>
