<template>
  <div>

    <v-row>
      <v-col class="col-12 col-sm-1"></v-col>
      <v-col class="col-12 col-sm-10">
        <h1 class="banner-title banner-center pa-7">Выберите из более 400 верифицированных трейдеров, основываясь на их
          объективных показателях</h1>
      </v-col>
      <v-col class="col-12 col-sm-1"></v-col>
    </v-row>

    <v-row>
      <v-col class="col-12 col-md-1"></v-col>

      <v-col class="col-12 col-md-3 text-block">
        <h2 class="text-title">Доходность</h2>
        <p class="mb-12">Средняя доходность топ-100 трейдеров платформы social trading &mdash; 230 процентов.</p>
        <h2 class="text-title">Риск</h2>
        <p class="mb-12">Риск. Сложный расчёт выраженный в простых числах.</p>
        <h2 class="text-title">Популярность</h2>
        <p>Совокупная сумма инвестиций 5 млрд долларов.</p>
      </v-col>

      <v-col class="col-12 col-md-4 d-flex justify-center">
        <div data-aos="slide-up" data-aos-duration="1000">
          <secondBannerCard/>
        </div>
      </v-col>

      <v-col class="col-12 col-md-3 text-block">
        <h2 class="text-title">Количество инвесторов</h2>
        <p class="mb-12">Количество инвесторов. Совокупное количество активных инвесторов более 50000.</p>
        <h2 class="text-title">Срок торговли</h2>
        <p class="mb-12">Срок торговли. Более 150 трейдеров с торогвой историей более 7 лет.</p>
        <h2 class="text-title">Динамика</h2>
        <p>Продвинутый график доходности с возможностью технического анализа.</p>
      </v-col>

      <v-col class="col-12 col-md-1"></v-col>
    </v-row>

  </div>
</template>

<script>
  import secondBannerCard from '~/components/pages/social-trading/secondBannerCard.vue'

  export default {
    components: {
      secondBannerCard
    },
  }
</script>

<style scoped>
  @media (max-width: 960px) {
    .text-block {
      text-align: center;
    }
  }
</style>
