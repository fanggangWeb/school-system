import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
Vue.use(Router)
// 如果是在开发模式下关闭懒加载，在生产版本中实现懒加载
const _import = require('./_import_' + process.env.NODE_ENV)
// if hidden is true not show the sidebar
// if noDropdown is ture show the submen
// if code === 300 就不显示
export const stateRoute = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: _import('login')
  },
  {
    path: '/',
    name: '主页',
    redirect: '/dashboard',
    component: home,
    children: [{path: 'dashboard', component: _import('dashboard/index')}]
  }
]
// 以后的动态路由
export const activeRoute = []
export default new Router({
  routes: stateRoute
})
