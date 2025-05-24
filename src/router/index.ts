import { createRouter, createWebHistory } from 'vue-router';
import { utilitiesRoutes } from './utilities';
import { testRoutes } from './testViews';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...utilitiesRoutes, ...testRoutes],
});

export default router;
