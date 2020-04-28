<template>
  <v-container fluid class="banners-container">
    <firstBanner/>
    <div class="spacer-mobile"></div>
    <secondBanner/>
    <div class="spacer-mobile"></div>
    <thirdBanner/>
    <div class="spacer-mobile"></div>
    <fourthBanner/>
    <div class="spacer-mobile"></div>
    <indicators/>
    <div class="spacer-mobile"></div>
    <fifthBanner/>
    <div class="spacer-mobile"></div>
    <sixthBanner/>
    <risk/>
    <div class="spacer-mobile"></div>
    <seventhBanner/>
    <div class="spacer-mobile"></div>
    <eighthBanner/>
    <div class="spacer-mobile"></div>
    <ninthBanner/>
    <div class="spacer-mobile"></div>
    <tenthBanner/>
    <div class="spacer-mobile"></div>
    <eleventhBanner/>
    <div class="spacer-mobile"></div>
    <twelfthBanner/>
  </v-container>
</template>

<script>
  import firstBanner from '~/components/pages/social-trading/firstBanner.vue'
  import secondBanner from '~/components/pages/social-trading/secondBanner.vue'
  import thirdBanner from '~/components/pages/social-trading/thirdBanner.vue'
  import fourthBanner from '~/components/pages/social-trading/fourthBanner.vue'
  import indicators from '~/components/pages/social-trading/indicators.vue'
  import fifthBanner from '~/components/pages/social-trading/fifthBanner.vue'
  import sixthBanner from '~/components/pages/social-trading/sixthBanner.vue'
  import risk from '~/components/pages/social-trading/risk.vue'
  import seventhBanner from '~/components/pages/social-trading/seventhBanner.vue'
  import eighthBanner from '~/components/pages/social-trading/eighthBanner.vue'
  import ninthBanner from '~/components/pages/social-trading/ninthBanner.vue'
  import tenthBanner from '~/components/pages/social-trading/tenthBanner.vue'
  import eleventhBanner from '~/components/pages/social-trading/eleventhBanner.vue'
  import twelfthBanner from '~/components/pages/social-trading/twelfthBanner.vue'

  export default {
    components: {
      firstBanner,
      secondBanner,
      thirdBanner,
      fourthBanner,
      indicators,
      fifthBanner,
      sixthBanner,
      risk,
      seventhBanner,
      eighthBanner,
      ninthBanner,
      tenthBanner,
      eleventhBanner,
      twelfthBanner
    },
  }
</script>

<style>
  .container{
    padding: 0 !important;
  }
  .banners-container{
    overflow: hidden;
  }
  .spacer-mobile{
    height: 100px;
  }
  @media (max-width: 600px) {
    .spacer-mobile{
      height: 30px;
    }
  }
</style>
