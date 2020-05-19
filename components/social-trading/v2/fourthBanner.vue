<template>
  <div class="banner-flex-center show-border">
    <div class="content">
      <v-row>
        <v-col class="col-12 col-md-4">
          <div class="block-title">Доходность</div>
          <p class="block-description">Средняя доходность топ-100 трейдеров платформы social trading &mdash; 230
            процентов.</p>
          <hr>
          <h2 class="block-title">Риск</h2>
          <p class="block-description">Риск. Сложный расчёт выраженный в простых числах.</p>
          <hr>
          <h2 class="block-title">Популярность</h2>
          <p class="block-description">Совокупная сумма инвестиций 5 млрд долларов.</p>
        </v-col>

        <v-col class="col-12 col-md-4 d-flex justify-center">
            <div v-intersect="onIntersect" :class="animate">
              <secondBannerCard/>
            </div>
        </v-col>

        <v-col class="col-12 col-md-4">
          <h2 class="block-title">Количество инвесторов</h2>
          <p class="block-description">Количество инвесторов. Совокупное количество активных инвесторов более 50000.</p>
          <hr>
          <h2 class="block-title">Срок торговли</h2>
          <p class="block-description">Срок торговли. Более 150 трейдеров с торговой историей более 7 лет.</p>
          <hr>
          <h2 class="block-title">Динамика</h2>
          <p class="block-description ">Продвинутый график доходности с возможностью технического анализа.</p>
        </v-col>

      </v-row>
    </div>
  </div>
</template>

<script>
  import secondBannerCard from '~/components/social-trading/v2/fourthBannerCard.vue'

  export default {
    components: {
      secondBannerCard
    },
    data() {
      return {
        isIntersecting: false,
        animate: false
      }
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
  .content {
    max-width: 980px;
  }

  .block-title {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 140%;
  }

  .block-description {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 140%;
  }

  hr {
    border: 0;
    height: 1px;
    background: #DFE3EA;
    margin: 25px 0 20px 0;
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
