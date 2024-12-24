import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/components/MainLayout.vue';
import DynamicContent from '@/components/DynamicContent.vue';

const routes = [
  {
    path: '/page/:id/:sectionLabel',
    component: MainLayout,
    children: [
      {
        path: '',
        component: DynamicContent,
        props: true,
      },
    ],
  },
  { path: '/', redirect: '/page/1/section1' }, // Default route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
