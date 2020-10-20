import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('@/components/sign-in/index.vue'),
  },
  {
    path: '/sign-out',
    name: 'SignOut',
    beforeEnter: (to, from, next) => {
      localStorage.removeItem('leadhit-site-id')
      next({ name: 'Home' })
    },
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import('@/components/chart/index.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
