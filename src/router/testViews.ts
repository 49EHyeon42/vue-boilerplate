export const testRoutes = [
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
  {
    path: '/test-views/sign-in-view1',
    name: 'SignInView1',
    component: () => import('@/testViews/SignInView1.vue'),
  },
  {
    path: '/test-views/dashboard-view',
    name: 'DashboardView',
    component: () => import('@/testViews/DashboardView.vue'),
  },
];
