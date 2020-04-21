<template>
  <div>

    <v-row>
      <v-col class="col-12 col-sm-1"></v-col>
      <v-col class="col-12 col-sm-10 center">
        <h1 class="banner-title-small banner-center pa-7">Доходность.
          <span class="grey-text">
          Больше, чем вы ожидаете. Отслеживайте процент доходности трейдера за всё время торговли или за выбранный
          период.
        </span>
        </h1>

        <screenTab :screen="'tab4screen.gif'" :gif="true" :tab="'tab4.png'"/>

      </v-col>
      <v-col class="col-12 col-sm-1"></v-col>
    </v-row>

    <v-row>
      <v-col class="col-12 col-sm-1"></v-col>
      <v-col class="col-12 col-sm-10 center">
        <h1 class="banner-title-small banner-center pa-7">Стратегия.
          <span class="grey-text">
          Торговую стратегию принято распределять по 3-м категориям в зависимости от показателей прибыльности:
        </span>
        </h1>

        <indicators/>

      </v-col>
      <v-col class="col-12 col-sm-1"></v-col>
    </v-row>
  </div>
</template>

<script>
  import screenTab from '~/components/pages/social-trading/screenTab.vue'
  import indicators from '~/components/pages/social-trading/indicators.vue'
  export default {
    components: {
      screenTab, indicators
    }
  }
</script>
