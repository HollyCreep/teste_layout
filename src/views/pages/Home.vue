<template>
  <v-container
    class="fill-height"
    fluid
  />
</template>

<script>
// @ is an alias to /src
  export default {
    name: 'Home',
    components: {
    },
    data () {
      return {
        emailsSubscriptionChart: {
          data: {
            labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],

            ],
          },
          options: {
            axisX: {
              showGrid: false,
            },
            low: 0,
            high: 1000,
            chartPadding: {
              top: 0,
              right: 5,
              bottom: 0,
              left: 0,
            },
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0]
                },
              },
            }],
          ],
        },
      }
    },
    computed: {
      products () {
        return this.$store.state.products
      },
      produtosDestaque () {
        return this.$store.state.produtosDestaque
      },

    },
  }
</script>
