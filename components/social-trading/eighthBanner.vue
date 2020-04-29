<template>
  <div class="banner-with-tab">

    <h1 class="banner-title-small banner-center pa-7">Начинающие под крылом профессионалов.
      <span class="grey-text">
          Десятки тысяч инвесторов начинают свой путь на форекс с прибыли, даже не имея опыта работы на финансовых рынках.
          Показатель количества инвесторов у каждого трейдера помогает в принятии решения при старте инвестиций и помогает
          оценить уровень доверия к трейдеру со стороны инвесторов.
        </span>
    </h1>

    <screenTab :screen="'tab8screen.png'"/>

  </div>
</template>

<script>
  import screenTab from '~/components/social-trading/screenTab.vue'

  export default {
    components: {
      screenTab
    }
  }
</script>
