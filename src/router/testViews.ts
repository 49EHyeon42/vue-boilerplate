export const testRoutes = [
  {
    path: '/tests/life-cycle',
    name: 'LifeCycleView',
    component: () => import('@/views/tests/LifeCycleView.vue'),
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
  {
    path: '/test-views/local-up',
    name: 'LocalUpView',
    component: () => import('@/testViews/LocalUpView.vue'),
  },
  {
    path: '/test-views/table-view',
    name: 'TableView',
    component: () => import('@/testViews/TableView.vue'),
  },
  {
    path: '/test-views/card-test',
    name: 'CardTestView',
    component: () => import('@/testViews/CardTestView.vue'),
  },
  {
    path: '/test-views/markdown',
    name: 'MarkdownView',
    component: () => import('@/testViews/MarkdownView.vue'),
  },
];
