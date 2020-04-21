<template>

  <div class="tab-wrapper">

    <img
      class="img" :src="tabScreen"
    />

    <div class="screen"
         v-intersect="onIntersect"
         :class="animate"
    >
      <img
        class="img" :src="imageScreen"
      />
    </div>

  </div>

</template>

<script>
  export default {
    props: ['screen', 'gif', 'tab'],
    data() {
      return {
        isIntersecting: false,
        animate: false,
        reload: false
      }
    },
    computed: {
      imageScreen() {
        if (this.gif === true && this.reload === true) {
          // reload .gif with once animation every intersection
          return require(`~/assets/img/${this.screen}`) + "?a=" + Math.random()
        } else {
          // don't reload .png
          return require(`~/assets/img/${this.screen}`)
        }
      },
      tabScreen() {
        if (this.tab) {
          return require(`~/assets/img/${this.tab}`)
        } else {
          return require(`~/assets/img/tab.png`)
        }
      },
    },
    methods: {
      reloadGif() {
        this.reload = true;
        // return require(`~/assets/img/${this.screen}`)+"?a="+Math.random()
      },
      onIntersect(entries, observer) {
        this.isIntersecting = entries[0].isIntersecting
        if (this.isIntersecting === true) {
          this.reload = true;
          this.animate = 'animate'
        } else {
          this.animate = 'none'
          this.reload = false;
        }
      }
    }
  }
</script>

<style scoped>
  .animate {
    animation: animate 1s 1 ease-in-out;
  }

  @keyframes animate {
    0% {
      transform: scale3d(3, 3, 3);
      opacity: 0;
    }
    100% {
      transform: scale3d(1, 1, 1);
      opacity: 1;
    }
  }

  .tab-wrapper {
    position: relative;
  }

  .screen {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
