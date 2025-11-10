import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import tableDragScroll from '@/pages/tableDragScroll'
import overflowAndabsolute from '@/pages/overflowAndabsolute'
import caculatePercise from '@/pages/caculatePercise'
import clinetIp from '@/pages/clinetIp'
import gridLayout from '@/pages/gridLayout/gridLayout.vue'
import showClientIP from '@/pages/clientInfo/showClientIP.vue'
import markdownParse from '@/pages/markdownParse/markdownParse.vue'
import selectTree from '@/pages/selectTree/selectTree.vue'
import practiceSkill from '@/pages/practiceSkill/index.vue'
import tablelayout from'@/pages/tablelayout/tablelayout.vue'
 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
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
    },
    {
      path: '/clinetIp',
      name: 'clinetIp',
      component: clinetIp
    },
    {
      path: '/gridLayout',
      name: 'gridLayout',
      component: gridLayout
    },
    {
      path: '/showClientIP',
      name: 'showClientIP',
      component: showClientIP
    },
    {
      path: '/markdownParse',
      name: 'markdownParse',
      component: markdownParse
    },
    {
      path:'/selectTree',
      name: 'selectTree',
      component: selectTree
    },
    {
      path:'/practiceSkill',
      name: 'practiceSkill',
      component: practiceSkill
    },
    {
      path:'/tablelayout',
      name: 'tablelayout',
      component: tablelayout
    },
    
  ]
})
