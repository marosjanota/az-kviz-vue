import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Intro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Intro.vue')
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import(/* webpackChunkName: "about" */ '../views/Game.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
