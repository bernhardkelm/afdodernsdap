<script setup lang="ts">
import { ROUTE_NAMES, ROUTE_PATHS } from '@/router';
import { changeRoute } from '@/helpers/changeRoute';

// Components
import TextPageWrapper from '@/components/TextPageWrapper.vue';
import Button from '@/components/helper/ButtonComponent.vue';
import SocialDownload from '@/components/helper/SocialDownloadComponent.vue';
</script>

<template>
  <TextPageWrapper>
    <h1>Downloads</h1>
    <section>
      <p>
        <strong>Mach mit und teile das Projekt mit Anderen!</strong>
      </p>
      <p>
        Dafür haben wir dir Social Media Grafiken und Sticker vorbereitet, die du dir hier
        herunterladen kannst.<br />
        Folge uns auch auf Instagram erwähne uns in deiner Story:
        <a href="https://www.instagram.com/afdodernsdap/">@afdodernsdap</a>.
      </p>
    </section>
    <section>
      <h2>Social Media Grafiken</h2>
      <h3>Story Vorlagen</h3>
      <SocialDownload image-path="/images/downloads/stories/instagram_story_2.jpg" />
      <SocialDownload image-path="/images/downloads/stories/instagram_story_2.jpg" />

      <h3>Post Vorlagen</h3>
      <SocialDownload image-path="/images/downloads/posts/instagram_post_1.jpg" />
      <SocialDownload image-path="/images/downloads/posts/instagram_post_2.jpg" />
    </section>

    <section>
      <h2>Sticker</h2>
      <SocialDownload
        image-path="/images/downloads/sticker/afd-oder-nsdap-sticker_5x5cm_1.png"
        pdf-path="/images/downloads/sticker/afd-oder-nsdap-sticker_5x5cm_1.pdf"
      />
      <SocialDownload
        image-path="/images/downloads/sticker/afd-oder-nsdap-sticker_5x5cm_2.png"
        pdf-path="/images/downloads/sticker/afd-oder-nsdap-sticker_5x5cm_2.pdf"
      />
    </section>
  </TextPageWrapper>
</template>
