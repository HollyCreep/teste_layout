import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    drawer: null,
    loading: false,
    notification: {},
    userInfo: {
      isLoggedIn: false,
      isSignedUp: false,
      hasSearched: false,
      name: '',
      productTitleSearched: '',
      token: '',
    },
    systemInfo: {
      openLoginModal: false,
      openSignupModal: false,
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
    SET_LOGIN: (state, data) => {
      state.userInfo.isLoggedIn = true
      state.userInfo.name = data.name
      state.userInfo.token = data.token
      Vue.http.headers.common.Authorization = data.token.access_token
      if (!localStorage.userInfo) { // se possui informaçoes do usuario salvas
          const tokenexpiration = new Date()
          tokenexpiration.setSeconds(new Date().getSeconds() + parseInt(data.token.expires_in))
          data.token.expires_in = tokenexpiration
        }
      localStorage.userInfo = JSON.stringify({ name: data.name, token: data.token })
    },
    SET_LOGOUT: (state, isLoggedIn) => {
      state.userInfo.isLoggedIn = isLoggedIn
      state.userInfo.token = ''
      localStorage.removeItem('userInfo')
      Vue.http.headers.common.Authorization = ''
    },
    isUserSignedUp: (state, isSignedUp) => {
      state.userInfo.isSignedUp = isSignedUp
    },
    setUserName: (state, name) => {
      state.userInfo.name = name
    },
    showLoginModal: (state, show) => {
      state.systemInfo.openLoginModal = show
    },
    showSignupModal: (state, show) => {
      state.systemInfo.openSignupModal = show
    },

  },
  actions: {

  },
  getters: {
    isUserLoggedIn: state => {
      return state.userInfo.isLoggedIn
    },
    isUserSignedUp: state => {
      return state.userInfo.isSignedUp
    },
    getUserName: state => {
      return state.userInfo.name
    },
    isLoginModalOpen: state => {
      return state.systemInfo.openLoginModal
    },
    isSignupModalOpen: state => {
      return state.systemInfo.openSignupModal
    },
  },

})
