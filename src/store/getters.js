const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  roles: state => state.user.roles,
  routers: state => state.permission.routers,
  id: state => state.user.id,
  activeRouter: state => state.permission.addRouters
}
export default getters
