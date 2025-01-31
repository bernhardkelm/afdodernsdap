import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import QuizView from '@/views/QuizView.vue';
import ShareView from '@/views/ShareView.vue';
import ImprintView from '@/views/ImprintView.vue';
import AboutView from '@/views/AboutView.vue';
import SourcesView from '@/views/SourcesView.vue';
import GdprView from '@/views/GdprView.vue';
import DownloadsView from '@/views/DownloadsView.vue';

export enum ROUTE_NAMES {
  HOME = 'HOME',
  QUIZ = 'QUIZ',
  SHARE = 'SHARE',
  IMPRINT = 'IMPRINT',
  DOWNLOADS = 'DOWNLOADS',
  ABOUT = 'ABOUT',
  SOURCES = 'SOURCES',
  GDPR = 'GDPR',
}

export enum ROUTE_PATHS {
  HOME = '/',
  QUIZ = '/quiz',
  SHARE = '/share',
  IMPRINT = '/impressum',
  ABOUT = '/about',
  DOWNLOADS = '/downloads',
  SOURCES = '/quellen',
  GDPR = '/datenschutz',
}

const routes = [
  {
    path: ROUTE_PATHS.HOME,
    name: ROUTE_NAMES.HOME,
    component: HomeView,
  },
  {
    path: ROUTE_PATHS.QUIZ,
    name: ROUTE_NAMES.QUIZ,
    component: QuizView,
  },
  {
    path: ROUTE_PATHS.SHARE,
    name: ROUTE_NAMES.SHARE,
    component: ShareView,
  },
  {
    path: ROUTE_PATHS.IMPRINT,
    name: ROUTE_NAMES.IMPRINT,
    component: ImprintView,
  },
  {
    path: ROUTE_PATHS.ABOUT,
    name: ROUTE_NAMES.ABOUT,
    component: AboutView,
  },
  {
    path: ROUTE_PATHS.DOWNLOADS,
    name: ROUTE_NAMES.DOWNLOADS,
    component: DownloadsView,
  },
  {
    path: ROUTE_PATHS.SOURCES,
    name: ROUTE_NAMES.SOURCES,
    component: SourcesView,
  },
  {
    path: ROUTE_PATHS.GDPR,
    name: ROUTE_NAMES.GDPR,
    component: GdprView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      // If we got a hash we scroll to the hash
      document.querySelector(to.hash)?.scrollIntoView();
    }
  },
});

export default router;
