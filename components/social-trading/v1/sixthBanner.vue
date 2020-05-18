<template>

    <div class="banner-with-tab">
        <h1 class="banner-title-small banner-center pa-7">Риск
          <span class="grey-text">
          может работать на вас. Уровень риска трейдеров варьируется от минимального со значением 1 и до максимального &mdash;
            10. Быстрая прибыль и высокий риск или консервативный подход &mdash; выбор за вами.
        </span>
        </h1>

        <screenTab :screen="'tab6screen.png'"/>
    </div>

</template>

<script>
  import screenTab from '~/components/social-trading/v1/screenTab.vue'
  export default {
    components: {
      screenTab
    }
  }
</script>


