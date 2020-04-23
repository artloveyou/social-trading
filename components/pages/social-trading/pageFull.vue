<template>

  <hooper
    :vertical="true"
    style="height: 1000px">
    <slide>
      <firstBanner/>
    </slide>
    <slide>
      <secondBanner/>
    </slide>
    <slide>
      <thirdBanner/>
    </slide>
    <slide>
      <fourthBanner/>
    </slide>
    <slide>
      <indicators/>
    </slide>
    <slide>
      <fifthBanner/>
    </slide>
    <slide>
      <sixthBanner/>
    </slide>
    <slide>
      <risk/>
    </slide>
    <slide>
      <seventhBanner/>
    </slide>
    <slide>
      <eighthBanner/>
    </slide>
    <slide>
      <ninthBanner/>
    </slide>
    <slide>
      <tenthBanner/>
    </slide>
    <slide>
      <eleventhBanner/>
    </slide>
    <slide>
      <twelfthBanner/>
    </slide>
  </hooper>

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

  import { Hooper, Slide } from 'hooper'
  import 'hooper/dist/hooper.css'

  export default {
    name: 'App',
    components: {
      firstBanner, secondBanner, thirdBanner, fourthBanner, indicators, fifthBanner, sixthBanner, risk, seventhBanner, eighthBanner,
      ninthBanner, tenthBanner, eleventhBanner, twelfthBanner,
      Hooper,
      Slide
    }
  }
</script>

<style>
  .hooper{
    height: auto;
  }
  .container {
    padding: 0;
  }
  .v-application ul, .v-application ol {
    padding-left: 0;
  }
</style>
