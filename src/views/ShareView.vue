<script setup lang="ts">
import { ref } from 'vue';
import { domToJpeg } from 'modern-screenshot';
import { useRouter } from 'vue-router';

const router = useRouter();

// Types
import { ROUTE_NAMES } from '@/router/index';

// Components
import Button from '@/components/helper/ButtonComponent.vue';
import ScoreComponent from '@/components/ScoreComponent.vue';

// Refs
const hasShareAPI = ref(!!navigator.share);
const shareButtonText = ref(hasShareAPI.value ? 'Ergebnis teilen' : 'Ergebnis kopieren');
const isLoading = ref(false);
const isGeneratingImage = ref(false);
const shareImage = ref<File | undefined>(undefined);

// Store imports
import { useQuotesStore } from '@/stores/quotes';
import BrandComponent from '@/components/BrandComponent.vue';
import BrandCardWrapper from '@/components/BrandCardWrapper.vue';

const quotesStore = useQuotesStore();

// Functions

/**
 * Generates an image from the current DOM nodes
 * @returns {Promise<void>}
 * @async
 */
const generateImageFromDOMNodes = async (): Promise<void> => {
  isGeneratingImage.value = true;

  try {
    const captureElement = document.querySelector('[data-js-share]') as HTMLElement;

    const imageData = await domToJpeg(captureElement, {
      quality: 1,
      scale: 2,
      backgroundColor: 'var(--color-background)',
      filter: (node) => (node.nodeName === 'BUTTON' ? false : true),
    });

    const response = await fetch(imageData);
    const blob = await response.blob();
    shareImage.value = new File([blob], 'afdodernssdap.jpg', {
      type: 'image/jpeg',
      lastModified: Date.now(),
    });
  } catch (e) {
    console.error('error from generateImageFromDOMNodes', e);
  } finally {
    isGeneratingImage.value = false;
  }
};

/**
 * Shares the current score
 * If the Share API is not available, the score will be copied to the clipboard
 * @async
 */
const shareContent = async () => {
  // If the current user agent does not support the Share API, for images
  // we will copy the text to the clipboard...
  if (!hasShareAPI.value) {
    let shareText = '';

    if (quotesStore.getCurrentScore() < 7) {
      shareText = `
        AfD oder NSDAP - wer hat es gesagt?
Ich habe ${quotesStore.getCurrentScore()} von ${quotesStore.answeredQuotesCount} Aussagen richtig zugeordnet - kannst du AfD und NSDAP genauso gut auseinander halten?
https://afdodernsdap.de/?utm_source=share&utm_medium=clipboard
      `;
    } else {
      shareText = `
        AfD oder NSDAP - wer hat es gesagt?
Ich habe ${quotesStore.getCurrentScore()} von ${quotesStore.answeredQuotesCount} Aussagen richtig zugeordnet -  kannst du AfD und NSDAP besser auseinander halten?
https://afdodernsdap.de/?utm_source=share&utm_medium=clipboard
      `;
    }

    navigator.clipboard.writeText(shareText);

    shareButtonText.value = 'Ergebnis kopiert!';
    return;
  }

  // ...otherwise we generate the image to share
  if (!shareImage.value) {
    await generateImageFromDOMNodes();
  }

  try {
    const shareData = {
      files: [shareImage.value],
      text:
        quotesStore.getCurrentScore() > 7
          ? `AfD oder NSDAP - wer hat es gesagt?
Ich habe ${quotesStore.getCurrentScore()} von ${quotesStore.answeredQuotesCount} Aussagen richtig zugeordnet - kannst du AfD und NSDAP genauso gut auseinander halten?`
          : `AfD oder NSDAP - wer hat es gesagt?
Ich habe ${quotesStore.getCurrentScore()} von ${quotesStore.answeredQuotesCount} Aussagen richtig zugeordnet -  kannst du AfD und NSDAP besser auseinander halten?`,
      url: 'https://afdodernsdap.de/?utm_source=share&utm_medium=share',
    } as ShareData;

    // Filter for sharable data the browser supports
    const supportedShareData = Object.entries(shareData)
      .filter(([key, value]) => {
        return navigator.canShare({ [key]: value });
      })
      .reduce(
        (acc: { [key: string]: string | File[] }, [key, value]) => {
          acc[key] = value;
          return acc;
        },
        {} as { [key: string]: string | File[] },
      );

    await navigator.share(supportedShareData);
  } catch (e) {
    console.error('error from share', e);
  } finally {
    isGeneratingImage.value = false;
  }
};

// Misc functions
if (quotesStore.selectedQuotes.length === 0) {
  // Redirect to main page if no questions have been answered...
  if (quotesStore.answeredQuotesCount === 0) {
    router.push({ name: ROUTE_NAMES.HOME });
  } else {
    // ...or the quiz page if we have a current game
    router.push({ name: ROUTE_NAMES.QUIZ });
  }
}

// Animate the cards into view and pre-generate image
// We have to use a small timeout for image generation to ensure the DOM is fully rendered
setTimeout(async () => {
  isLoading.value = true;
}, 200);
</script>

<template>
  <div class="share" data-js-share>
    <!-- Title Brand component -->
    <BrandComponent />
    <!-- Score Component -->
    <ScoreComponent />
    <!-- Brand Card wrapper -->
    <BrandCardWrapper>
      <h3>
        {{ quotesStore.getCurrentScore() }} von {{ quotesStore.answeredQuotesCount }} Aussagen
        erkannt
      </h3>
      <template v-if="quotesStore.getCurrentScore() < 8">
        <p>
          Gar nicht einfach die Zitate der Mitglieder beider Parteien auseinanderzuhalten, oder?
        </p>
        <p>
          Teile AfDoderNSDAP.de mit deinen Freundinnen und Freunden, damit mehr Menschen sehen, wie
          erschreckend schwer es ist, die Aussagen korrekt zu unterscheiden.
        </p>
      </template>
      <template v-else>
        <p>Puh! Bist du so gut informiert oder hast du gut geraten?</p>
        <p>
          Teile AfDoderNSDAP.de, um herauszufinden, ob deine Freundinnen und Freunde genauso gut
          Bescheid wissen – oder einfach, um ihnen zu zeigen, welche Aussagen sich in den Reihen der
          AfD wiederfinden.
        </p>
      </template>

      <div class="card-button-wrapper">
        <Button
          :icon="isGeneratingImage === true ? 'loading' : hasShareAPI ? 'share' : 'copy'"
          :iconAnimation="isGeneratingImage === true ? 'spin' : 'undefined'"
          @click="shareContent()"
          @keydown.enter="shareContent()"
          tabindex="1"
        >
          {{ shareButtonText }}
        </Button>
        <Button
          icon="rewind"
          @click="router.push({ name: ROUTE_NAMES.QUIZ })"
          @keydown.enter="router.push({ name: ROUTE_NAMES.QUIZ })"
          tabindex="1"
        >
          Nochmal probieren
        </Button>
      </div>
    </BrandCardWrapper>
  </div>
</template>

<style scoped>
.share {
  display: flex;
  flex-direction: column;
  height: fit-content;

  .card-button-wrapper {
    height: 100%;
    max-height: 150px;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: calc(1.5 * var(--padding-size-base));
  }
}
</style>
