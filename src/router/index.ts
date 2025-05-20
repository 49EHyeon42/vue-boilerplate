import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test-views/main-view-with-velog',
      name: 'mainViewWithVelog',
      component: () => import('@/testViews/MainViewWithVelog.vue'),
    },
    {
      path: '/test-views/sidebar-layout',
      name: 'sidebarLayout',
      component: () => import('@/testViews/SidebarLayoutViews.vue'),
    },
  ],
});

export default router;
