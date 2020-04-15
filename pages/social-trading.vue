<template>
  <v-container fluid class="pa-0 ma-0">
    <firstBanner/>
    <secondBanner/>
    <thirdBanner/>
    <fourthBanner/>
    <fifthBanner/>
    <sixthBanner/>
    <seventhBanner/>
    <eighthBanner/>
    <ninthBanner/>
    <tenthBanner/>
    <eleventhBanner/>
    <twelfthBanner/>

  </v-container>
</template>

<script>
  import firstBanner from '~/components/pages/social-trading/firstBanner.vue'
  import secondBanner from '~/components/pages/social-trading/secondBanner.vue'
  import thirdBanner from '~/components/pages/social-trading/thirdBanner.vue'
  import fourthBanner from '~/components/pages/social-trading/fourthBanner.vue'
  import fifthBanner from '~/components/pages/social-trading/fifthBanner.vue'
  import sixthBanner from '~/components/pages/social-trading/sixthBanner.vue'
  import seventhBanner from '~/components/pages/social-trading/seventhBanner.vue'
  import eighthBanner from '~/components/pages/social-trading/eighthBanner.vue'
  import ninthBanner from '~/components/pages/social-trading/ninthBanner.vue'
  import tenthBanner from '~/components/pages/social-trading/tenthBanner.vue'
  import eleventhBanner from '~/components/pages/social-trading/eleventhBanner.vue'
  import twelfthBanner from '~/components/pages/social-trading/twelfthBanner.vue'

  export default {
    components: {
      firstBanner, secondBanner, thirdBanner, fourthBanner, fifthBanner, sixthBanner, seventhBanner, eighthBanner,
      ninthBanner, tenthBanner, eleventhBanner, twelfthBanner
    },
    data() {
      return {}
    }
  }
</script>


