<template>

  <div class="tab-wrapper">

    <img
      class="img-banner"
      :src="tabScreen"
    />

    <div class="load-banner"
         :class="showBanner">
      <div class="screen"
           v-intersect="onIntersect"
           :class="animate"
      >
        <img
          class="img-banner" :src="imageScreen"
        />
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    props: ['screen', 'gif', 'tab'],
    data() {
      return {
        isIntersecting: false,
        showBanner: false,
        animate: false,
        reload: false
      }
    },
    computed: {
      imageScreen() {
        return require(`~/assets/img/social-trading/v1/${this.screen}`)
        // If need reload
        // if (this.gif === true && this.reload === true) {
        //   // reload .gif with once animation every intersection
        //   return require(`~/assets/img/social-trading/v1/${this.screen}`) + "?a=" + Math.random()
        // } else {
        //   // don't reload .png
        //   return require(`~/assets/img/social-trading/v1/${this.screen}`)
        // }
      },
      tabScreen() {
        if (this.tab) {
          return require(`~/assets/img/social-trading/v1/${this.tab}`)
        } else {
          return require(`~/assets/img/social-trading/v1/tab.png`)
        }
      },
    },
    methods: {
      reloadGif() {
        this.reload = true;
        // return require(`~/assets/img/social-trading/v1/${this.screen}`)+"?a="+Math.random()
      },
      onIntersect(entries, observer) {
        this.isIntersecting = entries[0].isIntersecting
        if (this.isIntersecting === true) {
          this.reload = true;
          this.showBanner = 'show-banner'
          this.animate = 'animate'
        }
      }
    }
  }
</script>

<style scoped>

  .animate {
    animation: animate 1s 1 cubic-bezier(.79, .01, .78, .29);
  }

  @keyframes animate {
    0% {
      /*transform: scale3d(3, 3, 3);*/
      opacity: 0;
    }
    100% {
      /*transform: scale3d(1, 1, 1);*/
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
