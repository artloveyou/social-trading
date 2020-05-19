<template>
  <bannerAnimation :image="'banner6.png'">
    <template v-slot:content>
      <h1 class="banner-title">John Johnson</h1>
      <h1 class="banner-description">Инвестор из Малазии</h1>
    </template>
  </bannerAnimation>
</template>

<script>
  import bannerAnimation from '~/components/social-trading/v2/bannerAnimation.vue'

  export default {
    components: {
      bannerAnimation
    }
  }
</script>

<style>
  .banner-title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 140%;
    color: #707070;
  }

  .banner-description {
    font-style: normal;
    font-size: 18px;
    line-height: 140%;
    color: #707070;
  }

  @media (max-width: 800px) {
    .banner-title, .banner-description {
      transform: scale(.7);
    }
  }
</style>
