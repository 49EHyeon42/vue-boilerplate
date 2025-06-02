export const utilitiesRoutes = [
  {
    path: '/utilities/case-converter',
    name: 'CaseConverterView',
    component: () => import('@/views/utilities/CaseConverterView.vue'),
  },
  {
    path: '/utilities/tour-api',
    name: 'TourApiView',
    component: () => import('@/views/utilities/TourApiView.vue'),
  },
];
