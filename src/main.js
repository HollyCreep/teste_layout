import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins/base'
import './plugins/vue-resources'
import './plugins/vee-validate'
import './plugins/vue-the-mask'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
