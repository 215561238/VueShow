import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/module/Home'
import Find from '@/components/module/Find'
import Order from '@/components/module/Order'
import My from '@/components/module/My'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
