import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/common/Home'
import Readme from '@/pages/Readme'
import BaseTable from '@/pages/BaseTable'

import VueTable from '@/pages/VueTable'
import BaseForm from '@/pages/BaseForm'
import VueEditor from '@/pages/VueEditor'
import Markdown from '@/pages/Markdown'

import Upload from '@/pages/Upload'
import BaseCharts from '@/pages/BaseCharts'
import DragList from '@/pages/DragList'

Vue.use(Router)

export default new Router({
  routes: [
  {
  	path: '/',
  	redirect:'/login'
  },
  {
  	path: '/login',
  	name: 'login',
  	component: Login
  },
  {
    path: '/readme',
    component: Home,
    children:[
      {path:'/',component:Readme},
      {path:'/basetable',component:BaseTable},
      {path:'/vuetable',component:VueTable},
      {path:'/baseform',component:BaseForm},
      {path:'/vueeditor',component:VueEditor},
      {path:'/markdown',component:Markdown},
      {path:'/upload',component:Upload},
      {path:'/baseCharts',component:BaseCharts},
      {path:'/dragList',component:DragList}
    ]
  },

  ]
})
