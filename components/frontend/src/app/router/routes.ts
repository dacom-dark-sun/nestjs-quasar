import { RouteRecordRaw } from 'vue-router';
import { MainLayout } from 'src/shared/ui/layouts/main';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => MainLayout,
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
