<script setup lang="ts">
// Components
import Button from '@/components/helper/ButtonComponent.vue';

// Types
import { ROUTE_NAMES, ROUTE_PATHS } from '@/router';

// Helpers
import { changeRoute } from '@/helpers/changeRoute';
</script>

<template>
  <div class="text-page">
    <header class="text-page-header">
      <Button
        @click="changeRoute($event, ROUTE_NAMES.HOME)"
        :href="ROUTE_PATHS.HOME"
        icon="arrowBack"
        as="a"
        tabindex="1"
      >
        Zurück zur Startseite
      </Button>
    </header>

    <main class="text-page-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.text-page {
  padding: calc(6 * var(--padding-size-base)) calc(3 * var(--padding-size-base));
}

@media screen and (min-width: 375px) {
  .text-page {
    padding: calc(8 * var(--padding-size-base)) calc(5 * var(--padding-size-base));
  }
}

.text-page-header {
  margin-bottom: calc(11 * var(--padding-size-base));
}

:deep(.text-page-content) {
  display: flex;
  flex-direction: column;
  gap: calc(5 * var(--padding-size-base));
  hyphens: auto;

  .light {
    font-size: 19px;
    font-weight: 400;
  }

  .link {
    color: var(--color-text);
    text-decoration: underline;
    cursor: pointer;
    hyphens: none;
    &:hover {
      color: var(--color-link-hover);
    }

    &:focus-visible {
      color: var(--color-link-hover);
      text-decoration: none;
      outline: none;
    }

    &.url-link {
      word-break: break-all;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: calc(2 * var(--padding-size-base));
  }

  h1,
  h2,
  h3 {
    text-align: unset;
    hyphens: auto;
  }

  h2 {
    font-size: var(--font-size-accent);
  }

  h3 {
    font-size: var(--font-size-text);
  }

  p,
  li {
    font-style: normal;
    font-size: var(--font-size-text);
    line-height: 140%;
  }

  address {
    font-style: normal;
    font-size: var(--font-size-text);
    line-height: 140%;
  }

  strong {
    font-size: var(--font-size-text);
    font-weight: 700;
  }

  ul {
    list-style-type: disc;
    padding-left: calc(4 * var(--padding-size-base));
  }

  @media screen and (max-width: 450px) {
    .mobile--smaller {
      font-size: var(--font-size-subtitle);
    }
  }
}
</style>
