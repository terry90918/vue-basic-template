import { createRouter, createWebHashHistory } from 'vue-router'

/* Layout */
import Layout from '@/layout/default'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home'),
        meta: {
          title: 'Home',
          icon: 'home',
        },
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about'),
        meta: {
          title: 'About',
          icon: 'about',
        },
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login'),
        meta: {
          title: 'Login',
          icon: 'login',
        },
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
]

const val = {
  history: createWebHashHistory(),
  routes,
}

const router = createRouter(val)

export function resetRouter() {
  const newRouter = createRouter(val)
  router.matcher = newRouter.matcher // reset router
}

export default router
