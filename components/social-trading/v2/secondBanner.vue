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
        animatedly: false
      }
    },
    computed: {
      animatedGif() {
        if (this.animatedly === false) {
          if (this.isIntersecting === true) {
            this.animatedly = true;
            return require(`~/assets/img/social-trading/v2/LapAnimation.gif`);
          } else {
            return require(`~/assets/img/social-trading/v2/LapPlaceholderStart.png`);
          }
        } else {
          return require(`~/assets/img/social-trading/v2/LapPlaceholderEnd.png`);
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
    background-color: red;
  }
</style>
