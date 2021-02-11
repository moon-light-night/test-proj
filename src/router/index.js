import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PersonalAccount',
    component: () => import('../views/PersonalAccount.vue'),
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('../views/Payment.vue'),
  },
  {
    path: '/new-card',
    name: 'new-card',
    component: () => import('../views/AddNewCard.vue'),
  },
  {
    path: '/new-card-num',
    name: 'new-card-num',
    component: () => import('../views/AddNewCard-num.vue'),
  },
  {
    path: '/new-card-mmyy',
    name: 'new-card-mmyy',
    component: () => import('../views/AddNewCard-mmyy.vue'),
  },
  {
    path: '/new-card-cvv',
    name: 'new-card-cvv',
    component: () => import('../views/AddNewCard-cvv.vue'),
  },
  {
    path: '/new-card-fsname',
    name: 'new-card-fsname',
    component: () => import('../views/AddNewCard-fsname.vue'),
  },
  {
    path: '/main-page',
    name: 'main-page',
    component: () => import('../views/MainPage.vue'),
  },
  {
    path: '/card-info',
    name: 'card-info',
    component: () => import('../views/CardInfo.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
