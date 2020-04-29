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
          <div class="signature"
               :class="animateSignature"
          >
            <slot name="signature"></slot>
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
        animateSignature: false,
      }
    },
    methods: {
      onIntersect(entries, observer) {
        this.isIntersecting = entries[0].isIntersecting
        if (this.isIntersecting === true) {
          this.animate = 'animate'
          this.showContentBlock = 'show-content'
          this.animateContent = 'animate-content'
          this.animateSignature = 'animate-signature'
        }
      }
    },
    computed: {
      imageLoad() {
        return require(`~/assets/img/${this.image}`)
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
    animation: animate-content 1s 1 cubic-bezier(1, 0, .48, .48);
  }

  @keyframes animate-content {
    0% {
      transform: translate3d(-140%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  .animate-signature {
    animation: animate-signature 1s 1 cubic-bezier(1, 0, .48, .48);
  }

  @keyframes animate-signature {
    0% {
      transform: translate3d(150%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  .banner {
    position: relative;
  }


  .signature {
    color: #707070;
    position: absolute;
    bottom: 50px;
    left: 120px;
  }

  @media (max-width: 600px) {
    .banner {
      margin-top: 1em;
    }

    .banner-content {
      top: 15px;
      left: 30px;
    }

    .signature {
      font-size: 0.6em;
      width: 150px;
      left: 30px;
      bottom: 15px;
    }

    .banner-title {
      font-size: 1em;
    }

    .banner-big-title {
      font-size: 1.3em;
    }
  }

  @media (min-width: 600px) and (max-width: 960px) {
    .banner-content {
      top: 60px;
      left: 50px;
    }

    .banner-title {
      font-size: 1.5em;
    }

    .banner-big-title {
      font-size: 2em;
    }

    .signature {
      font-size: 0.8em;
      left: 50px;
      bottom: 25px;
    }
  }

  @media (min-width: 960px) and (max-width: 1200px) {
    .banner-content {
      top: 70px;
      left: 50px;
    }

    .banner-title {
      font-size: 2em;
    }

    .banner-big-title {
      font-size: 3em;
    }

    .signature {
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
