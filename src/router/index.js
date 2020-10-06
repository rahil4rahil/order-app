import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.view.vue'
import Order from '../views/order.view.vue'
import OrderDetail from '../views/order-detail.view.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/order',
    name: 'Order',
    meta: { transitionName: 'slide' },
    component:() => import('../views/order.view.vue'),
    children: [
      {
        path: ':id',
        name: 'OrderDetail',
        component: () => import('../views/order-detail.view.vue'),
        meta: { transitionName: 'slide' }
      },
      {
      path: '',
      name: 'OrderList',
      component: () => import('../components/order-list.component.vue')
      }
    ],
  },
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
