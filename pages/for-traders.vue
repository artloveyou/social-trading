<template>
  <v-layout>
    <v-flex class="text-center">
      <div class="blank"></div>
      <div data-aos="slide-up" data-aos-duration="4000">
        <secondBannerCard/>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import secondBannerCard from '~/components/pages/social-trading/secondBannerCard.vue'

  export default {
    components: {
      secondBannerCard
    },
  }
</script>

<style>
.blank {
  border: 1px solid red;
  width: 100%;
  height: 1000px;
}
</style>
