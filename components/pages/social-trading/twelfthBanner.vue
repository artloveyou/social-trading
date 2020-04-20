<template>
  <v-row>
    <v-col class="col-12 col-sm-1"></v-col>
    <v-col class="col-12 col-sm-10 center">
      <h1 class="banner-title-small banner-center pa-7">Единственный способ увеличить инвестиции –
        бесстрастно анализировать.
        <span class="grey-text">
          График доходности собирает совокупность результатов по каждой сделке трейдера и помогает отобрать наиболее
          перспективных.
          Динамика доходности в виде графика позволяет наглядно увидеть, как торгует каждый трейдер в платформе.
          на протяжении всего времени существования счета, или за отдельный период времени вплоть до часа.
          В настройках графика вы можете установить дневную, недельную или месячную доходность для оценки перспектив
          в зависимости от планируемых сроков инвестиций.
        </span>
      </h1>

      <screenTab :screen="'tab12screen.png'"/>

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
