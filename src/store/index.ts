import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
  },
  getters: {
    getToken(state) {
      return state.token;
    },
  },
  mutations: {
    setToken(state, token) {
      console.log("lllllllllllllllllllllollollololololo")
      state.token = token;
    },
  },
  actions: {
  },
  modules: {
  }
})
