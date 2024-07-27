import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home'
import tableDragScroll from '@/components/tableDragScroll'
import overflowAndabsolute from '@/components/overflowAndabsolute'

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
    }
  ]
})
