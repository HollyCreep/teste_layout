<template>
  <v-app>
    <router-view />
    <notification />
    <core-footer />

    <loading />
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {
      Notification: () => import('@/components/core/Notification'),
      Loading: () => import('@/components/core/Loading'),
      CoreFooter: () => import('@/components/core/Footer'),
    },
  }
</script>
