const auth = {
  namespaced: true,
  state: {
    token: '',
    username: ''
  },
  /* 只能同步执行 */
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USERNAME(state, username) {
      state.username = username
    }
  },
  /* 允许异步分发 */
  actions: {
    /* 登出 */
    logout() {
      console.log('退出登录操作')
    },
    saveLoginInfo() {
      console.log('此处为保存登录信息')
    },
    getUserInfo() {
      
    }
  }
}