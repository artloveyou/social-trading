<template>
      <div
        class="banner"
        v-intersect="onIntersect"
      >
        <div
          class="img-hide"
          :class="animate"
        >
        </div>
        <img class="img"
             :src="imageLoad"/>
        <div
          class="content-block"
          :class="showContentBlock"
        >
          <div class="banner-content"
               :class="animateContent"
          >
            <slot name="content"></slot>
          </div>

        </div>
      </div>
</template>

<script>
  export default {
    props: ['image'],
    data() {
      return {
        isIntersecting: false,
        animate: false,
        showContentBlock: false,
        animateContent: false,
      }
    },
    methods: {
      onIntersect(entries, observer) {
        this.isIntersecting = entries[0].isIntersecting
        if (this.isIntersecting === true) {
          this.animate = 'animate'
          this.showContentBlock = 'show-content'
          this.animateContent = 'animate-content'
        }
      }
    },
    computed: {
      imageLoad() {
        return require(`~/assets/img/social-trading/v2/${this.image}`)
      },
    },
  }
</script>

<style scoped>
  .content-block {
    opacity: 0;
    transition: all 1s ease-in-out;
  }

  .show-content {
    opacity: 1;
  }

  .img-hide {
    position: absolute;
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    transition: all 2s ease-in-out;
  }

  .animate {
    transform: translateX(-100%);
  }

  .banner-content {
    position: absolute;
  }

  .animate-content {
    animation: animate-content 1s 1 ease-in-out;
  }

  @keyframes animate-content {
    0% {
      transform: translate3d(-140%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  .banner {
    position: relative;
  }


  @media (max-width: 600px) {
    .banner {
      margin-top: 1em;
    }

    .banner-content {
      width: 100px;
      top: 15px;
      left: 5px;
    }
  }

  @media (min-width: 600px) and (max-width: 960px) {
    .banner-content {
      top: 60px;
      left: 50px;
    }
  }

  @media (min-width: 960px) and (max-width: 1200px) {
    .banner-content {
      top: 70px;
      left: 50px;
    }
  }

  @media (min-width: 1200px) {
    .banner-content {
      top: 20%;
      left: 120px;
    }
  }
</style>
