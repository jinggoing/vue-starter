import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Test from '../views/Test'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/xx',
      component: Test
    },
  ]
})
