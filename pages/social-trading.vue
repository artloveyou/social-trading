<template>
  <v-container fluid class="pa-0 ma-0">
    <firstBanner/>
    <secondBanner/>
    <thirdBanner/>
    <fourthBanner/>
    <fifthBanner/>
    <sixthBanner/>
  </v-container>
</template>

<script>
  import firstBanner from '~/components/pages/social-trading/firstBanner.vue'
  import secondBanner from '~/components/pages/social-trading/secondBanner.vue'
  import thirdBanner from '~/components/pages/social-trading/thirdBanner.vue'
  import fourthBanner from '~/components/pages/social-trading/fourthBanner.vue'
  import fifthBanner from '~/components/pages/social-trading/fifthBanner.vue'
  import sixthBanner from '~/components/pages/social-trading/sixthBanner.vue'

  export default {
    components: {
      firstBanner, secondBanner, thirdBanner, fourthBanner, fifthBanner, sixthBanner
    },
    data() {
      return {}
    }
  }
</script>


