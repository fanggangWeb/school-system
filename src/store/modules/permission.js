import {stateRoute, activeRoute} from '@/router'
const permission = {
  state: {
    routers: stateRoute, // 用于导航栏显示
    addRouters: [] // 动态添加的路由表
  },
  mutations: {
    SET_ROUTER: (state, routers) => {
      state.addRouters = routers
      state.routers = stateRoute.concat(routers)
    }
  },
  actions: {
    GenerateRoutes ({commit}, data) {
      // 到时候动态的添加路由
      return new Promise((resolve) => {
        commit('SET_ROUTER', activeRoute)
        resolve(true)
      })
    }
  }
}
export default permission
