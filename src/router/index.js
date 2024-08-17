import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import tableDragScroll from '@/pages/tableDragScroll'
import overflowAndabsolute from '@/pages/overflowAndabsolute'
import caculatePercise from '@/pages/caculatePercise'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/tableDragScroll',
      name: 'tableDragScroll',
      component: tableDragScroll
    },
    {
      path: '/overflowAndabsolute',
      name: 'overflowAndabsolute',
      component: overflowAndabsolute
    },
    {
      path: '/caculatePercise',
      name: 'caculatePercise',
      component: caculatePercise
    }
  ]
})
