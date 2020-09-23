<template>
  <v-content>
    <base-imagem-container />
    <v-row
      class="justify-sm-space-around mt-10"
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
          <small class="texto-pequeno">O quanto o diagnóstico de uma doença grave, internação, ou cirurgia inesperada pode afetar, hoje, sua vida pessoal e financeira?</small>
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
    <blog
      :limit="2"
      :contain="true"
    />
  </v-content>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      Blog: () => import('@/views/Blog'),
    },
  }
</script>

<style lang="scss" scoped>
      .texto-pequeno {
        color: $primary_color !important;
        font-family: 'Work Sans', sans-serif;
        font-weight: 900;
      }
</style>
