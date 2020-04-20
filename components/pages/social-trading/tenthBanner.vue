<template>
  <v-row>
    <v-col class="col-12 col-sm-1"></v-col>
    <v-col class="col-12 col-sm-10 center">
      <h1 class="banner-title-small banner-center pa-7">Стоящий у всех на виду не позволит себе необдуманных решений.
        <span class="grey-text">
          Популярность трейдера выражается в количестве средств, которые ему доверили инвесторы. Чем больше совокупных
          средств находится у трейдера в управлении, тем выше уровень доверия и наложенной на него ответственности.
          Платформа позволяет поддерживать прямой диалог с выбранным трейдером, благодаря встроенной системе обмена сообщениями.
        </span>
      </h1>

      <screenTab :screen="'tab10screen.png'"/>
<!--      <img class="img" src="~/assets/img/banner10.png"/>-->
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
