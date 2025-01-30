import './assets/css/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueUmamiPlugin } from '@jaseeey/vue-umami-plugin';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(
  VueUmamiPlugin({
    websiteID: 'a46fa3fa-7aa9-4884-978a-4484a41f6129',
    scriptSrc: 'https://umami.afdodernsdap.de/script.js',
    router,
  }),
);

app.use(createPinia());
app.use(router);

app.mount('#app');
