import { Message } from 'element-ui'
// 数据成功的提示
export function MessageSuccess (message) {
  Message({
    type: 'success',
    message
  })
}
// 数据失败的提示
export function MessageError (message = '服务器出错，请联系后台管理人员') {
  Message({
    type: 'error',
    showClose: true,
    message
  })
}
