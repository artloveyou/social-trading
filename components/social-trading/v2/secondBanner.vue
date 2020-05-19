<template>
  <div class="banner-flex-center show-border">

    <div
      class="animation-trigger"
      v-intersect="onIntersect"
    ></div>

    <img
      class="img-banner"
      :src="animatedGif"
    />

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isIntersecting: false,
        animate: false
      }
    },
    computed: {
      animatedGif() {
        if (this.isIntersecting === true) {
          this.animate = true
        }
        if (this.animate === true) {
          return require(`~/assets/img/social-trading/v2/LapAnimation.gif`);
        } else {
          return require(`~/assets/img/social-trading/v2/LapPlaceholderStart.png`);
        }
      }
    },
    methods: {
      onIntersect(entries, observer) {
        this.isIntersecting = entries[0].isIntersecting
      }
    }
  }
</script>

<style scoped>
  .animation-trigger {
    position: absolute;
    bottom: 10px;
    width: 100px;
    height: 20px;
  }
</style>
