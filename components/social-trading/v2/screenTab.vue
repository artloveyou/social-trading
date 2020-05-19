<template>

  <div class="tab-wrapper">

    <img
      class="img-banner"
      :src="tabScreen"
    />

      <div class="screen"
           v-intersect="onIntersect"
           :class="animate"
      >
        <img
          class="img-banner" :src="imageScreen"
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
        animate: false
      }
    },
    computed: {
      imageScreen() {
        return require(`~/assets/img/social-trading/v2/${this.screen}`)
      },
      tabScreen() {
        if (this.tab) {
          return require(`~/assets/img/social-trading/v2/${this.tab}`)
        } else {
          return require(`~/assets/img/social-trading/v2/TabFrame.png`)
        }
      },
    },
    methods: {
      onIntersect(entries, observer) {
        this.isIntersecting = entries[0].isIntersecting
        if (this.isIntersecting === true) {
          this.animate = 'animate'
        }
      }
    }
  }
</script>

<style scoped>

  .animate {
    animation: animate 3s 1 cubic-bezier(1, .01, 1, .85);
  }

  @keyframes animate {
    0% {
      transform: scale3d(1.7, 1.7, 1.7);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }

  .tab-wrapper {
    position: relative;
    margin: 200px 0 0 0;
  }

  @media (max-width: 600px) {
    .tab-wrapper {
      margin: 50px 0 0 0;
    }
  }

  .screen {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
