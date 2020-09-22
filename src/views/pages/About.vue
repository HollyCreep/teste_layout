<template>
  <v-container>
    <div
      v-if="cervejarias"
      class="about"
    >
      <h1
        v-for="(item, index) in cervejarias"
        :key="index"
      >
        ID: {{ item.id }} - Titulo: {{ item.title }}
      </h1>
    </div>
    <div
      v-else
      class="about"
    >
      <h1>Não ta dando</h1>
    </div>
    <v-content>
      <router-view />
    </v-content>
  </v-container>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data () {
      return {
        cervejarias: [],
        post: null,
        error: null,
      }
    },
    watch: {
      // call again the method if the route changes
      $route: 'fetchData',
    },
    mounted: function () {},
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchData()
    },
    methods: {
      fetchData () {
        this.error = this.post = null
        this.setStateLoading(true)
        this.$http
          .get('https://jsonplaceholder.typicode.com/albums/1/photos/')
          .then(
            response => {
              this.cervejarias = response.data
              this.setStateLoading(false)
              this.setNotification({
                snackbar: true, // toogle do snackbar de alerta
                color: 'success', // cor do snackbarr
                text: 'Lista importada com sucesso', // mensagem do snackbar
                timeout: 2000,
              })
            },
            error => {
              this.setStateLoading(false)
              this.error = error
            },
          )
      },
      ...mapMutations({
        setStateLoading: 'SET_LOADING',
        setNotification: 'SET_NOTIFICATION',
      }),
    },
  }
</script>
