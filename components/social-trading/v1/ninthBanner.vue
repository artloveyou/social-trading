<template>
  <bannerAnimation :image="'banner9.png'">
    <template v-slot:content>
      <h1 class="banner-title grey-text">Рискованно?</h1>
      <h1 class="banner-big-title">Возможно.</h1>
      <h1 class="banner-title grey-text">Прибыльно?</h1>
      <h1 class="banner-big-title">Однозначно да.</h1>
    </template>
    <template v-slot:signature>
      <p>// Наш самый успешный Ути Пути Мухаммед</p>
    </template>
  </bannerAnimation>
</template>

<script>
  import bannerAnimation from '~/components/social-trading/v1/bannerAnimation.vue'

  export default {
    components: {
      bannerAnimation
    }
  }
</script>
