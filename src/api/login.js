import fetch from '@/utils/fetch'
import qs from 'qs'
// import { $HTTP } from '@/utils/config'
// 用户登录
export function login(data) {
  return fetch({
    // url: `${$HTTP}/login/up`,
    url: 'https://www.easy-mock.com/mock/5b208fd61a7a570e36edfd3e/oa/teacher/login',
    method: 'post'
  })
}
// 用户拉取信息
export function fetchUserInfo(token) {
  let data = {token}
  data = qs.stringify(data)
  return fetch({
    // url: `${$HTTP}/user/getToken`,
    url: 'https://www.easy-mock.com/mock/5b208fd61a7a570e36edfd3e/oa/teacher/roles',
    data,
    method: 'post'
  })
}
