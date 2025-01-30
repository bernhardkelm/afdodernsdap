<template>
  <section class="brand">
    <h1>AfD oder NSDAP?</h1>
    <h2>Wer hat es gesagt?</h2>
  </section>
</template>

<style scoped>
.brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(2 * var(--padding-size-base));
  padding: calc(5 * var(--padding-size-base));
  padding-bottom: 0;

  & > * {
    width: 100%;
  }
}
</style>
