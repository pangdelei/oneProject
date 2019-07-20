import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginName: '',
    loginState: ''
  },
  mutations: {
    changeLoginName (state, data) {
      state.loginName = data
    },
    changeLoginState (state, data) {
      state.loginState = data
    }
  },
  actions: {

  }
})
