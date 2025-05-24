import { createRouter, createWebHistory } from 'vue-router';
import { utilitiesRoutes } from './utilities';
import { testRoutes } from './testViews';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...utilitiesRoutes,
    ...testRoutes,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundView',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
});

export default router;
