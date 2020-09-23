<template>
  <v-content>
    <base-imagem-container />
    <v-row
      class="fill-height justify-sm-space-around mt-10"
    >
      <v-col
        cols="12"
        sm="5"
        md="4"
        lg="3"
        class="col-esquerda"
      >
        <base-card-bem-estar />
        <div class="div-central mx-auto">
          <span class="headline orange--text">Pense nisso...</span>
          <small>O quanto o diagnóstico de uma doença grave, internação, ou cirurgia inesperada pode afetar, hoje, sua vida pessoal e financeira?</small>
        </div>
        <div :class="`${$vuetify.breakpoint.smAndUp ? 'botao-blog' : 'w-100' }`">
          <router-link to="/typecode">
            <v-btn
              color="primary"
              tile
              x-large
              width="100%"
              height="60px"
            >
              Blog
            </v-btn>
          </router-link>
        </div>
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
  </v-content>
</template>

<script>
  export default {
    name: 'Home',
  }
</script>

<style lang="scss" scoped>

</style>
