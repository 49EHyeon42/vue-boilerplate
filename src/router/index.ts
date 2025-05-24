import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/utilities/case-converter',
      name: 'CaseConverterView',
      component: () => import('@/views/utilities/CaseConverterView.vue'),
    },
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
    {
      path: '/test-views/sidebar-layout2',
      name: 'sidebarLayout2',
      component: () => import('@/testViews/SidebarLayoutViews2.vue'),
    },
    {
      path: '/test-views/eh-layout2',
      name: 'EhLayout2',
      component: () => import('@/testViews/EhView2.vue'),
    },
  ],
});

export default router;
