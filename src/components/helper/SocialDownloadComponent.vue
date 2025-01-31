<script setup lang="ts">
import Button from '@/components/helper/ButtonComponent.vue';

// Props
interface SocialDownloadProps {
  imagePath: string;
  pdfPath?: string;
  altText?: string;
}

const props = withDefaults(defineProps<SocialDownloadProps>(), {
  imagePath: '',
  pdfPath: undefined,
  altText: undefined,
});
</script>

<template>
  <div class="row">
    <dvi class="col">
      <img class="image" :src="props.imagePath" :alt="props.altText" />
    </dvi>
    <div class="col col--download">
      <div class="button-container">
        <Button
          :href="props.imagePath"
          download
          target="_blank"
          icon="download"
          as="a"
          tabindex="1"
        >
          Bild herunterladen
        </Button>
        <Button
          v-if="props.pdfPath"
          :href="props.pdfPath"
          download
          target="_blank"
          icon="download"
          as="a"
          tabindex="1"
        >
          PDF herunterladen
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-items: center;
}

.col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.col--download {
  padding: 15px;
}

.image {
  width: 100%;
  height: auto;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
