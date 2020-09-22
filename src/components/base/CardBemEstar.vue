<template>
  <v-content>
    <div
      id="card_bem_estar"
      outlined
      color="transparent"
      class="fill-height card-bem-estar"
    >
      <v-card
        color="transparent"
        height="600px"
        class="d-flex flex-column justify-space-around"
      >
        <v-card-title class="title">
          <h4 class="subtitle">
            Vida Toda
          </h4>
          <h1 class="titulo">
            BEM ESTAR
          </h1>
        </v-card-title>
        <v-card-text>
          <div class="text-h5 text-md-h4 titulo p-6">
            Soluções completas para viver mais e melhor
          </div>
          <div class="d-flex justify-center mt-12 p-6">
            <v-btn
              color="secondary"
              tile
              x-large
            >
              Quero uma consultoria
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-content>
</template>

<script>
  export default {
    computed: {
    },
  }
</script>

<style lang="scss" scoped>
    @import '@/sass/components/card-bem-estar';
</style>
