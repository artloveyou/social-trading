<template>
  <v-container fluid class="banners-container">
    <first-banner/>
    <second-banner/>
    <third-banner/>
    <fourth-banner/>
    <fifth-banner/>
    <sixth-banner/>
    <seventh-banner/>
    <eighth-banner/>
    <ninth-banner/>
  </v-container>
</template>

<script>
  import firstBanner from '~/components/social-trading/v2/firstBanner'
  import secondBanner from '~/components/social-trading/v2/secondBanner'
  import thirdBanner from '~/components/social-trading/v2/thirdBanner'
  import fourthBanner from '~/components/social-trading/v2/fourthBanner'
  import fifthBanner from '~/components/social-trading/v2/fifthBanner'
  import sixthBanner from '~/components/social-trading/v2/sixthBanner'
  import seventhBanner from '~/components/social-trading/v2/seventhBanner'
  import eighthBanner from '~/components/social-trading/v2/eighthBanner'
  import ninthBanner from '~/components/social-trading/v2/ninthBanner'

  export default {
    components: {
      firstBanner, secondBanner, thirdBanner, fourthBanner,
      fifthBanner, sixthBanner, seventhBanner, eighthBanner,
      ninthBanner
    }
  }
</script>

<style scoped>
  .banners-container {
    overflow: hidden;
  }
</style>
