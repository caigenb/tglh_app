import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login/Login.vue'
import index from '../views/index.vue'
import UserCharts from '../components/Layout/UserCharts.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '登录',
    component: Login
  },
  {
    path:'/index',
    name:'主页',
    component:index,
    children:[
      {
        path:'/UserCharts',
        name:'统计信息',
        component:UserCharts
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
