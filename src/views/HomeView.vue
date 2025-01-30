<script setup lang="ts">
import { ref } from 'vue';

// Types
import { ROUTE_NAMES } from '@/router/index';

// Components
import Button from '@/components/helper/ButtonComponent.vue';
import BrandComponent from '@/components/BrandComponent.vue';
import BrandCardWrapper from '@/components/BrandCardWrapper.vue';

// Helpers
import { changeRoute } from '@/helpers/changeRoute';

// Refs
const isLoaded = ref(false);

setTimeout(() => {
  isLoaded.value = true;
}, 200);
</script>

<template>
  <main class="home">
    <BrandComponent />
    <BrandCardWrapper>
      <div class="card-texts">
        <p>
          Die folgenden Zitate stammen von Anhänger*innen der NSDAP oder von aktiven
          Parteimitgliedern der AfD. Ordne das Zitat jeweils der AfD oder der NSDAP zu.
        </p>
        <p>Kannst du die 1930er und die 2020er Jahre auseinanderhalten?</p>
      </div>
      <div class="card-button-wrapper">
        <Button
          @click="changeRoute($event, ROUTE_NAMES.QUIZ)"
          @keydown.enter="changeRoute($event, ROUTE_NAMES.QUIZ)"
          tabindex="1"
          >Starte jetzt!</Button
        >
      </div>
    </BrandCardWrapper>
  </main>
</template>

<style scoped>
.home {
  display: grid;
  grid-template-rows: min-content 1fr;

  @media (min-width: 768px) {
    grid-template-rows: min-content min-content;
    align-content: center;
  }

  p {
    flex-grow: 1;
  }

  button {
    margin: 0 auto;
    margin-top: calc(1 * var(--padding-size-base));
  }

  .card-button-wrapper {
    height: 100%;
    max-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card-texts {
    display: flex;
    flex-direction: column;
    gap: calc(1.5 * var(--padding-size-base));
  }
}
</style>
