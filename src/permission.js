import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getCookie } from './utils/cookie'
const whiteList = ['/login'] // 定义登录白名单

router.beforeEach((to, from, next) => {
  if (getCookie('token')) {
    // 如果token存在直接进入home页面
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      // 如果没有获取到权限
      if (store.getters.roles.length === 0) {
        console.log('开始执行')
        store.dispatch('FetchUserInfo').then(res => {
          if (!res) {
            Message.error('拉取用户信息失败!')
            // 重置token和其他的
            store.dispatch('FedLogout').then(() => {
              next({path: '/login'})
            })
          } else {
            store.dispatch('GenerateRoutes', store.getters.roles).then(() => {
              router.addRoutes(store.getters.activeRouter) // 添加动态路由
              next({...to})
            })
          }
        }).catch((error) => {
          console.log('返回失败捕获catch', error)
          Message.error('拉取用户信息失败!请重新登录++++++')
          // 重置token和其他的
          store.dispatch('FedLogout').then(() => {
            next({path: '/login'})
          })
        })
      } else {
        next()
      }
    }
  } else {
    // 如果token不存在
    if (whiteList.indexOf(to.path) !== -1) {
      // 如果输入的路由执行登录页面, 则不做操作
      next()
    } else {
      // 如果输入不是login路由
      next('/login')
    }
  }
})
