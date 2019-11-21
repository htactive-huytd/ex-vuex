import Vue from 'vue'
import Router from 'vue-router'
import ExVuex from '@/components/ExVuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ExVuex',
      component: ExVuex
    }
  ]
})
