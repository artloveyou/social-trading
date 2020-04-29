<template>

  <div class="banner-with-tab">

    <h1 class="banner-title-small banner-center pa-7">Стоящий у всех на виду не позволит себе необдуманных решений.
      <span class="grey-text">
          Популярность трейдера выражается в количестве средств, которые ему доверили инвесторы. Чем больше совокупных
          средств находится у трейдера в управлении, тем выше уровень доверия и наложенной на него ответственности.
          Платформа позволяет поддерживать прямой диалог с выбранным трейдером, благодаря встроенной системе обмена сообщениями.
        </span>
    </h1>

    <screenTab2 :screen="'tab10screen.png'"/>

  </div>

</template>

<script>
  import screenTab2 from '~/components/social-trading/screenTab2.vue'

  export default {
    components: {
      screenTab2
    }
  }
</script>
