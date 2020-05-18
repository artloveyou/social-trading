<template>
  <div>

    <h1 class="banner-title banner-center pt-7 pb-7">
      Выберите из более 400 верифицированных трейдеров, основываясь на их
      объективных показателях
    </h1>

    <v-row class="pr-5 pl-5">
      <v-col class="col-12 col-md-1"></v-col>

      <v-col class="col-12 col-md-3 text-block padding-top">
        <h2 class="text-title">Доходность</h2>
        <p class="mb-12">Средняя доходность топ-100 трейдеров платформы social trading &mdash; 230 процентов.</p>
        <h2 class="text-title">Риск</h2>
        <p class="mb-12">Риск. Сложный расчёт выраженный в простых числах.</p>
        <h2 class="text-title">Популярность</h2>
        <p>Совокупная сумма инвестиций 5 млрд долларов.</p>
      </v-col>

      <v-col class="col-12 col-md-4 d-flex justify-center">
        <div class="load-banner"
             :class="showBanner">
          <div v-intersect="onIntersect" :class="animate">
            <secondBannerCard/>
          </div>
        </div>
      </v-col>

      <v-col class="col-12 col-md-3 text-block padding-top">
        <h2 class="text-title">Количество инвесторов</h2>
        <p class="mb-12">Количество инвесторов. Совокупное количество активных инвесторов более 50000.</p>
        <h2 class="text-title">Срок торговли</h2>
        <p class="mb-12">Срок торговли. Более 150 трейдеров с торговой историей более 7 лет.</p>
        <h2 class="text-title">Динамика</h2>
        <p>Продвинутый график доходности с возможностью технического анализа.</p>
      </v-col>

      <v-col class="col-12 col-md-1"></v-col>
    </v-row>

  </div>
</template>

<script>
  import secondBannerCard from '~/components/social-trading/v1/secondBannerCard.vue'
  import iconScroll from '~/assets/icons/iconScroll'

  export default {
    components: {
      secondBannerCard, iconScroll
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
  .padding-top {
    padding-top: 70px;
  }
  @media (max-width: 960px) {
    .text-block {
      text-align: center;
    }
  }

  .animate {
    animation: animate 1s 1 ease-in-out;
  }

  @keyframes animate {
    0% {
      transform: translate3d(0, -20%, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
</style>
