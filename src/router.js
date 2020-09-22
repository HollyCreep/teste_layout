import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/Index'),
      children: [
        // ========================   Rotas Públicas  =============================
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/pages/Home.vue'),
        },
        // ===================================================================
        // -------------------- 404 - Not Found --------------------
        {
          path: '*',
          redirect: '/',
        },
      ],
    },
  ],
})

function isAuthenticated () {
  if (store.getters.isUserLoggedIn) {
    return true
  }
  return false
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isAuthenticated()) {
      next()
    } else {
      next(false)
      store.commit('showLoginModal', true)
    }
  } else {
    next()
  }
})

export default router
