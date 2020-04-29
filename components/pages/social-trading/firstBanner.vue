<template>

  <v-row>
    <v-col class="banner">

      <div class="load-banner"
           :class="showBanner">

      <div
        v-intersect="onIntersect"
        :class="animate">

        <h1 class="banner-text banner-title banner-center mb-7">Лучший сервис инвестиций</h1>
        <div class="banner-text description banner-center mb-7" style="color: #cccccc">
          Social trading создан для тех кто ищет максимальную прибыль и минимальный риск.
          Богатый выбор управляющих, невероятный контроль над инвестициями и возможность общения с трейдерами.
          Инновационная платформа для начинающих и профессиональных инвесторов.
        </div>

      </div>

      </div>

      <div
        v-ripple
        class="button rounded registration">
        РЕГИСТРАЦИЯ
      </div>

      <v-btn
        rounded
        v-scroll-to="'#second-banner'"
        class="icon-scroll-dark mt-12"
        text
        large
      >
      </v-btn>

    </v-col>
  </v-row>

</template>

<script>
  import iconScroll from '~/assets/icons/iconScroll'

  export default {
    components: {
      iconScroll
    },
    data() {
      return {
        isIntersecting: false,
        showBanner: false,
        animate: false
      }
    },
    methods: {
      onIntersect(entries, observer) {
        this.isIntersecting = entries[0].isIntersecting
        if (this.isIntersecting === true) {
          this.animate = 'animate'
          this.showBanner = 'show-banner'
        }
      }
    }
  }
</script>

<style scoped>
  .registration {
    color: #ffffff;
    background-color: #007FD8;
    border: 1px solid #007FD8;
    min-width: 207px;
    height: 60px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
  }

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

  .banner {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;

    margin-top: -20px;
    height: 100vh;
    width: 100vw;
    background-color: #000000;
  }

  .banner-text {
    font-weight: 500;
    color: #ffffff;
  }

  .description {
    font-size: 17px;
    max-width: 700px;
    line-height: 160%;
  }
</style>
