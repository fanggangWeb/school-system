import * as types from '../mutations-type'
import {login, fetchUserInfo} from '@/api/login'
import { setCookie, getCookie, removeCookie } from '@/utils/cookie'
const SUCCESS_OK = '200'
const user = {
  state: {
    token: getCookie('token'),
    name: getCookie('name'),
    avatar: getCookie('avatar'),
    id: getCookie('id'),
    roles: []
  },
  mutations: {
    [types.SET_TOKEN](state, token) {
      state.token = token
      setCookie('token', token)
    },
    [types.SET_NAME](state, name) {
      setCookie('name', name)
      state.name = name
    },
    [types.SET_AVATAR](state, avatar) {
      setCookie('avatar', avatar)
      state.avatar = avatar
    },
    [types.SET_ID](state, id) {
      setCookie('id', id)
      state.id = id
    },
    [types.SET_ROLES](state, roles) {
      state.roles = roles
    }
  },
  actions: {
    // 用户登录
    Login({commit}, userInfo) {
      const {name} = userInfo
      return new Promise((resolve, reject) => {
        login(userInfo).then(res => {
          res = res.data
          // 登录成功
          if (res.state === SUCCESS_OK) {
            commit('SET_NAME', name) // 设置名字
            commit('SET_TOKEN', res.data.token) // 设置token
            resolve(true)
          } else {
            // 登录失败
            resolve(false)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户的信息及其权限
    FetchUserInfo({commit, state}) {
      const token = state.token
      return new Promise((resolve, reject) => {
        fetchUserInfo(token).then(res => {
          res = res.data
          // 拉取用户权限及其信息成功
          if (res.state === SUCCESS_OK) {
            commit('SET_AVATAR', res.data.avatar)
            commit('SET_ROLES', res.data.roles)
            commit('SET_ID', res.data.id)
            setCookie('townStreetId', res.data.townStreetId)
            resolve(true)
          } else {
            // 拉取用户信息和权限失败
            resolve(false)
          }
        }).catch(error => {
          console.log('确认有没有返回reject')
          reject(error)
        })
      })
    },
    // 用户注销
    FedLogout({commit}) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '') // 把token设置为空
        removeCookie('token')
        removeCookie('id')
        commit('SET_ROLES', [])
        commit('SET_ID', '')
        removeCookie('townStreetId')
        resolve()
      })
    }
  }
}
export default user
