<template>
  <v-app>
    <base-imagem-container />
    <v-row
      class="fill-height justify-sm-space-around mt-10"
    >
      <v-col
        cols="12"
        sm="5"
        md="4"
        lg="3"
      >
        <base-card-bem-estar />
        <div class="div-central mx-auto">
          <span class="headline orange--text">Pense nisso...</span>
          <small>O quanto o diagnóstico de uma doença grave, internação, ou cirurgia inesperada pode afetar, hoje, sua vida pessoal e financeira?</small>
        </div>
          <v-btn
            color="primary"
            tile
            x-large
            width="100%"
            height="60px"
          >
            Blog
          </v-btn>
      </v-col>
      <v-col
        cols="12"
        sm="5"
        md="4"
        lg="3"
      >
        <div class="align-self-center">
          <base-card-login />
        </div>
      </v-col>
    </v-row>
    <notification />

    <loading />
  </v-app>
</template>

<script>
  export default {
    name: 'DashboardIndex',

    components: {
      Notification: () => import('@/components/core/Notification'),
      Loading: () => import('@/components/core/Loading'),
    },

    data: () => ({
      expandOnHover: false,
      userInfo: {},
    }),
    watch: {
      userInfo (newValue) {
        localStorage.userInfo = newValue
      },
    },

    created () {
      // this.getAllProductsByFornecedor()
      // this.getAllCategorias()
    },

    mounted () {
      if (localStorage.userInfo && (new Date() > new Date(JSON.parse(localStorage.userInfo).token.expires_in))) { // caso esteja dentro da data de validade
        this.$store.commit('SET_LOGOUT', false)
        this.$store.commit('SET_NOTIFICATION', {
          color: 'error',
          text: 'Token de autenticação expirado, favor realizar login novamente!',
        })
      }
    },
    methods: {
      async getAllProductsByFornecedor () {
        this.loading = true
        var data = this.innerProduto

        this.$http
          .get('produtos/0', data, {
            emulateJSON: true,
          })
          .then(
            response => {
              const arr = []
              Object.values(response.data).forEach((value) => { // gambiarra pq a Api esta devolvendo um obj
                arr.push(value)
              })
              this.$store.commit('SET_PRODUTOS', arr)
              this.loading = false
            },
            error => {
              this.loading = false
              this.error = error
            },
          )
      },
      async getAllCategorias () {
        this.loading = true
        this.$http
          .get('categorias', {
            emulateJSON: true,
          })
          .then(
            response => {
              this.$store.commit('SET_CATEGORIAS', response.data)
              this.loading = false
            },
            error => {
              this.loading = false
              this.error = error
            },
          )
      },
    },
  }
</script>

<style lang="scss" scoped>
    .div-central {
      word-break: break-word;
      padding: 24px;
      display: flex;
      flex-wrap: wrap;
      width: 70%;
    }
</style>
