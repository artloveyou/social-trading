<template>

  <div class="banner-with-tab">

    <h1 class="banner-title-small banner-center pa-7">Доходность.
      <span class="grey-text">
          Больше, чем вы ожидаете. Отслеживайте процент доходности трейдера за всё время торговли или за выбранный
          период.
        </span>
    </h1>

    <screenTab :screen="'tab4screen.gif'" :gif="true" :tab="'tab4.png'"/>

  </div>

</template>

<script>
  import screenTab from '~/components/social-trading/v1/screenTab.vue'
  import indicators from '~/components/social-trading/v1/indicators.vue'

  export default {
    components: {
      screenTab, indicators
    }
  }
</script>
