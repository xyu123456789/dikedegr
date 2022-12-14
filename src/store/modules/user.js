import { login } from '@/api/login'
export default {
  namespaced: true,
  state: {
    token: null,
    img: null
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    }
  },
  actions: {
    async loginAction({ commit }, loginData) {
      const data = await login(loginData)
      console.log(data)
      commit('SET_TOKEN', data)
    }
  }
}
