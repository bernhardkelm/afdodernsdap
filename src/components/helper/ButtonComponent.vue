<script setup lang="ts">
import IconComponent from '@/components/helper/IconComponent.vue';

interface ButtonProps {
  icon?: string;
  iconAnimation?: string;
  as?: 'button' | 'a';
}

const props = withDefaults(defineProps<ButtonProps>(), {
  icon: undefined,
  iconAnimation: undefined,
  as: 'button',
});
</script>

<template>
  <component :is="as">
    <IconComponent
      v-if="props.icon"
      :name="props.icon"
      :animation="props.iconAnimation"
      :color="null"
    />
    <slot></slot>
  </component>
</template>

<style scoped>
button,
a {
  padding: calc(2 * var(--padding-size-base));
  background-color: var(--color-black);
  border: none;
  color: var(--color-white);
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  font-size: var(--font-size-text);
  transition: 0.3s ease background-color;
  pointer-events: auto;
  touch-action: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-decoration: none;

  &:hover {
    background-color: var(--color-bg-button-hover);
  }

  &:focus-visible {
    background-color: var(--color-bg-button-hover);
    outline: 2px solid var(--color-bg-button-hover);
    outline-offset: 2px;
  }

  .icon {
    margin-right: calc(2 * var(--padding-size-base));
    background-color: var(--color-white);
  }
}
</style>
