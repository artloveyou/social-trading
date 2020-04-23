<template>
  <v-row>
    <v-col class="pa-0 ma-0">

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
             src="~/assets/img/banner3.png"/>

        <div class="banner-content"
             :class="animateContent"
        >
          <h1 class="banner-title grey-text">Рискованно?</h1>
          <h1 class="banner-big-title">Возможно.</h1>
          <h1 class="banner-title grey-text">Прибыльно?</h1>
          <h1 class="banner-big-title">Однозначно да.</h1>
        </div>

          <div class="signature grey-text"
               :class="animateSignature"
          >// Наш самый успешный Ути Пути Мухаммед
          </div>
        </div>

    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        isIntersecting: false,
        animate: false,
        animateContent: false,
        animateSignature: false,
      }
    },
    methods: {
      onIntersect(entries, observer) {
        this.isIntersecting = entries[0].isIntersecting
        if (this.isIntersecting === true) {
          this.animate = 'animate'
          this.animateContent = 'animate-content'
          this.animateSignature = 'animate-signature'
        }else{
          this.animate = 'none'
          this.animateContent = 'none'
          this.animateSignature = 'none'
        }
      }
    }
  }
</script>

<style scoped>
  .animate-signature {
    animation: animate-signature 1s 1 cubic-bezier(1,0,.48,.48);
  }

  @keyframes animate-signature {
    0% {
      transform: translate3d(150%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  .animate-content {
    animation: animate-content 1s 1 cubic-bezier(1,0,.48,.48);
  }

  @keyframes animate-content {
    0% {
      transform: translate3d(-120%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  .animate {
    animation: animate 1s 1 cubic-bezier(1,0,.48,.48);
  }

  @keyframes animate {
    0% {
      transform: translate3d(100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  .banner {
    position: relative;
  }

  .banner-content {
    position: absolute;
  }
  .signature {
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
