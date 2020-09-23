<template>
  <v-card
    class="fill-height mx-auto"
    max-width="500px"
  >
    <v-img
      :src="getImgUrl()"
      height="200px"
    />
    <v-card-title class="titulo">
      {{ item.title }}
    </v-card-title>
    <v-card-text class="card-body">
      <p>
        {{ item.body }}
      </p>
    </v-card-text>
    <v-card-actions class="card-footer">
      <v-btn
        color="secondary"
        rounded
        small
      >
        Continuar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'BlogItem',

    props: {
      post: {
        type: Object,
        required: true,
      },
    },
    data () {
      return {
        item: {
          title: '',
          body: '',
        },
      }
    },

    created () {
      if (this.post) {
        this.item = this.post
      }
    },

    methods: {
      getImgUrl () {
        return require('@/assets/bg-1.jpg')
      },
    },
  }
</script>

<style lang="scss" scoped>
    @import '@/sass/components/blog-item';
</style>
