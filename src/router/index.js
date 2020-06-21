import Vue from 'vue'
import VueRouter from 'vue-router'
import home from 'src/views/home/Home.vue'
import detail from 'src/views/detail.vue'
import login from 'src/views/login/index'
import dedicatedTools from 'src/views/tools/dedicatedTools'
import generalTools from 'src/views/tools/generalTools'
import edit from 'src/views/edit/edit'
import main from 'src/views/main'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/home',
    name: 'home',
    //redirect:'/tools/dedicatedTools',
    component: home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail,
  },
  {
    path:'/main',
    component:home,
    meta:{ title: '主页', icon: 'el-icon-folder' },
    children:[
      {
        path:'',
        name:'main',
        component:main,
        meta:{ title: '主页', icon: 'el-icon-folder' },
      }
    ]
  },
  {
    path:'/tools',
    name:'tools',
    component:home,
    meta:{ title: '工具', icon: 'el-icon-scissors' },
    children:[
      {
        path:'dedicatedTools',
        name:'dedicatedTools',
        component:dedicatedTools,
        meta:{ title: '专用工具', icon: 'el-icon-scissors' },
      },
      {
        path:'generalTools',
        name:'generalTools',
        component:generalTools,
        meta:{ title: '通用工具', icon: 'el-icon-scissors' },
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export const asyncRoutes = [
  {
    path:'/edit',
    component:home,
    meta:{ title: '编辑权限', icon: 'el-icon-edit' },
    children:[
      {
        path:'/',
        name:'edit',
        component:edit,
      }
    ]
  }
]





export default router
