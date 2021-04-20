const getters = {
  avatar: (state) => state.user.avatar,
  device: (state) => state.app.device,
  name: (state) => state.user.name,
  sidebar: (state) => state.app.sidebar,
  token: (state) => state.user.token,
}
export default getters
