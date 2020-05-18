<template>
  <v-container fluid class="banners-container">
    <first-banner/>
    <second-banner/>
    <third-banner/>
  </v-container>
</template>

<script>
  import firstBanner from '~/components/social-trading/v2/firstBanner'
  import secondBanner from '~/components/social-trading/v2/secondBanner'
  import thirdBanner from '~/components/social-trading/v2/thirdBanner'

  export default {
    components: { firstBanner, secondBanner, thirdBanner }
  }
</script>

<style scoped>
  .banners-container {
    overflow: hidden;
  }
</style>
