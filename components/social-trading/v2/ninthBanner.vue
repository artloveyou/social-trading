<template>
  <div class="banner-flex-center show-border">
    <div class="carousel-wrapper">

      <v-carousel
        cycle
        hide-delimiters
        show-arrows-on-hover
        height="100%"
      >
        <first-slide />
        <first-slide />
<!--        <second-slide />-->
      </v-carousel>

    </div>
  </div>
</template>

<script>
  import firstSlide from '~/components/social-trading/v2/carousel/firstSlide'
  import secondSlide from '~/components/social-trading/v2/carousel/secondSlide'

  export default {
    components: { firstSlide, secondSlide },
    data() {
      return {}
    },
  }
</script>

<style scoped>
  .carousel-wrapper {
    width: 100%;
    max-width: 980px;
    margin: 50px 0 0 0;
  }
</style>
