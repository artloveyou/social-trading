<template>
  <v-row>
    <v-col class="col-12 col-sm-1"></v-col>
    <v-col class="col-12 col-sm-10 center">
      <h1 class="banner-title-small banner-center pa-7">Начинающие под крылом профессионалов.
        <span class="grey-text">
          Десятки тысяч инвесторов начинают свой путь на форекс с прибыли, даже не имея опыта работы на финансовых рынках.
          Показатель количества инвесторов у каждого трейдера помогает в принятии решения при старте инвестиций и помогает
          оценить уровень доверия к трейдеру со стороны инвесторов.
        </span>
      </h1>

      <screenTab :screen="'tab8screen.png'"/>

    </v-col>
    <v-col class="col-12 col-sm-1"></v-col>
  </v-row>
</template>

<script>
  import screenTab from '~/components/pages/social-trading/screenTab.vue'
  export default {
    components: {
      screenTab
    }
  }
</script>
