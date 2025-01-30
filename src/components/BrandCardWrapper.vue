<script setup lang="ts">
import { ref } from 'vue';

// Refs
const isLoaded = ref(false);

setTimeout(() => {
  isLoaded.value = true;
}, 200);
</script>

<template>
  <section class="brand-card-wrapper">
    <div class="brand-card--background brand-card--nsdap" :class="{ isLoaded }">
      <span aria-hidden="true">NSDAP</span>
    </div>
    <div class="brand-card--background brand-card--afd" :class="{ isLoaded }">
      <span aria-hidden="true">AfD</span>
    </div>
    <div class="brand-card">
      <div class="brand-card--content">
        <slot></slot>
      </div>
      <small aria-hidden="true">AfDoderNSDAP.de</small>
    </div>
  </section>
</template>

<style scoped>
.brand-card-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(5 * var(--padding-size-base));
  padding-top: 0;
  height: 100%;
  min-height: 0;
  max-width: 100%;
  padding-top: 8rem;

  .brand-card {
    z-index: var(--z-index-base);
  }

  .brand-card--background {
    width: 50%;
    position: absolute;
    top: -5.5rem;
    background: var(--color-background-secondary);
    border-radius: calc(2 * var(--padding-size-base));
    box-shadow: var(--box-shadow-cards-background);
    z-index: var(--z-index-behind);
    transform: rotate(0deg) translate(0%, 12rem);
    transform-origin: bottom center;
    transition: all 0.6s cubic-bezier(0.47, 1.64, 0.41, 0.8);

    /* Use aspect-ratio for precise 2:3 scaling */
    aspect-ratio: 2 / 3;
    scale: 0.7;

    &.isLoaded {
      scale: 1.1;
    }

    & > span {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .brand-card--nsdap {
    background-color: var(--color-brand-nsdap-primary);

    &.isLoaded {
      transform: rotate(-5deg) translate(-40%, 8rem);
    }

    & > span {
      font-size: var(--font-size-brand);
      font-weight: 900;
      background-color: var(--color-brand-nsdap-secondary);
      color: var(--color-brand-nsdap-text);
      height: fit-content;
      padding: var(--padding-size-base);
      padding-bottom: 0;
    }
  }

  .brand-card--afd {
    background-color: var(--color-brand-afd-primary);
    transition-delay: 0.1s;

    &.isLoaded {
      transform: rotate(5deg) translate(40%, 8rem);
    }

    & > span {
      font-size: var(--font-size-brand);
      color: var(--color-brand-afd-text);
      height: fit-content;
      font-weight: 900;

      &::after {
        content: '';
        display: block;
        height: var(--padding-size-base);
        background-color: var(--color-brand-afd-secondary);
        margin-top: calc(-1 * var(--padding-size-base));
      }
    }
  }
}

.brand-card {
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--padding-size-base));
  background: var(--color-background-secondary);
  font-size: var(--font-size-text);
  line-height: 140%;
  border-radius: calc(2 * var(--padding-size-base));
  box-shadow: var(--box-shadow-cards);
  padding: calc(5 * var(--padding-size-base));
  min-height: 100%;

  .brand-card--content {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: calc(2 * var(--padding-size-base));

    .icon {
      margin-right: calc(2 * var(--padding-size-base));
    }
  }
}
</style>
