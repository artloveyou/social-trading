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
  import firstBanner from '~/components/social-trading/v1/firstBanner.vue'
  import secondBanner from '~/components/social-trading/v1/secondBanner.vue'
  import thirdBanner from '~/components/social-trading/v1/thirdBanner.vue'
  import fourthBanner from '~/components/social-trading/v1/fourthBanner.vue'
  import indicators from '~/components/social-trading/v1/indicators.vue'
  import fifthBanner from '~/components/social-trading/v1/fifthBanner.vue'
  import sixthBanner from '~/components/social-trading/v1/sixthBanner.vue'
  import risk from '~/components/social-trading/v1/risk.vue'
  import seventhBanner from '~/components/social-trading/v1/seventhBanner.vue'
  import eighthBanner from '~/components/social-trading/v1/eighthBanner.vue'
  import ninthBanner from '~/components/social-trading/v1/ninthBanner.vue'
  import tenthBanner from '~/components/social-trading/v1/tenthBanner.vue'
  import eleventhBanner from '~/components/social-trading/v1/eleventhBanner.vue'
  import twelfthBanner from '~/components/social-trading/v1/twelfthBanner.vue'

  export default {
    components: {
      firstBanner, secondBanner, thirdBanner, fourthBanner, indicators, fifthBanner, sixthBanner, risk,
      seventhBanner, eighthBanner, ninthBanner, tenthBanner, eleventhBanner, twelfthBanner
    },
  }
</script>

<style>
  .scroll {
    position: fixed;
    padding: 20px;
    background-color: #ffffff;
  }
  .container {
    padding: 0 !important;
  }

  .banners-container {
    overflow: hidden;
  }

  .spacer-mobile {
    height: 100px;
  }

  @media (max-width: 600px) {
    .spacer-mobile {
      height: 30px;
    }
  }
</style>
