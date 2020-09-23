<template>
  <v-content>
    <v-card
      color="primary"
      :class="contain ? 'contain' : ''"
      dark
    >
      <router-link to="/blog">
        <v-card-title
          class="d-flex"
        >
          <v-btn
            v-show="!contain"
            color="secondary"
            @click="$router.go(-1)"
          >
            Voltar
          </v-btn>
          <h2 class="flex-grow-1 text-center white--text">
            Blog
          </h2>
          <v-slider
            v-show="!contain"
            v-model="slider"
            color="secondary"
            label="Quantidade"
            hide-details
            dense
          />
        </v-card-title>
      </router-link>
    </v-card>
    <v-card-text>
      <v-row
        justify="space-around"
      >
        <v-col
          v-for="(item) in limit ? items.slice(0,limit) : items"
          :key="item.id"
          cols="12"
          sm="5"
          md="4"
          lg="3"
        >
          <base-blog-item :post="item" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-content>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'Blog',
    props: {
      limit: {
        type: Number,
        required: false,
        default: 0,
      },
      contain: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    data () {
      return {
        items: [],
        slider: 0,
      }
    },
    watch: {
      slider (val) {
        if (val && !this.contain) {
          this.limit = this.slider
        }
      },
    },
    mounted: function () {},
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        this.setStateLoading(true)
        this.$http
          .get('https://jsonplaceholder.typicode.com/posts')
          .then(
            response => {
              this.items = response.data
              this.slider = this.items.length
              this.setStateLoading(false)
              this.setNotification({
                snackbar: true, // toogle do snackbar de alerta
                color: 'success', // cor do snackbarr
                text: 'Posts importados com sucesso', // mensagem do snackbar
                timeout: 2000,
              })
            },
            error => {
              this.setStateLoading(false)
              console.log(error)
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

<style lang="scss" scoped>
    .contain {
      @media not all and (max-width: 400px) {
        width: 50%;
      }
    }
</style>
