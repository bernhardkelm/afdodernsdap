<script setup lang="ts">
// Compontents
import IconComponent from '@/components/helper/IconComponent.vue';

// Helpers
import { changeRoute } from '@/helpers/changeRoute';

// Types
import { ROUTE_NAMES, ROUTE_PATHS } from '@/router/index';
</script>

<template>
  <footer>
    <a :href="ROUTE_PATHS.ABOUT" @click="changeRoute($event, ROUTE_NAMES.ABOUT)" tabindex="2">
      <IconComponent name="help" class="footer-icon" :no-zindex="true" />Über das Projekt
    </a>
    <div class="footer-imprint">
      <a :href="ROUTE_PATHS.SOURCES" @click="changeRoute($event, ROUTE_NAMES.SOURCES)" tabindex="2"
        >Stand: 01.02.2025</a
      >
      <a :href="ROUTE_PATHS.IMPRINT" @click="changeRoute($event, ROUTE_NAMES.IMPRINT)" tabindex="2">
        Impressum
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: calc(5 * var(--padding-size-base)) calc(3 * var(--padding-size-base));
  padding-top: 0;

  > a {
    cursor: pointer;
    text-decoration: underline;
    color: color-mix(in srgb, var(--color-text), transparent 30%);
    line-height: 140%;
    margin-bottom: calc(5 * var(--padding-size-base));

    &:hover {
      color: var(--color-link-hover);
    }

    &:focus-visible {
      color: var(--color-link-hover);
      text-decoration: none;
      outline: none;
    }

    .footer-icon {
      vertical-align: sub;
      margin-right: var(--padding-size-base);
    }
  }

  .footer-imprint {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: var(--font-size-small);

    > a {
      cursor: pointer;
      color: var(--color-text);
      text-decoration: underline;

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
}

@media screen and (min-width: 375px) {
  .imprint {
    padding: calc(5 * var(--padding-size-base));
  }
}
</style>
