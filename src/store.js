import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    notification: {},
    userInfo: {
      isLoggedIn: false,
      isSignedUp: false,
      token: '',
    },
    systemInfo: {
    },
  },
  mutations: {
    SET_LOADING (state, payload) {
      state.loading = payload
    },
    SET_NOTIFICATION (state, payload) {
      payload.snackbar = true
      if (!payload.timeout) {
        payload.timeout = 2000
      }
      if (!payload.color) {
        payload.color = 'success'
      }
      state.notification = payload
    },
  },
  actions: {

  },
  getters: {
  },

})
