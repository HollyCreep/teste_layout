<template>
  <v-content>
    <div
      outlined
      color="transparent"
      class="img-container"
    >
      <v-img
        :src="require('@/assets/bg-1.jpg')"
        height="500px"
      />
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
    @import '@/sass/components/img-container';
</style>
