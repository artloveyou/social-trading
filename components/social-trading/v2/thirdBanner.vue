<template>
  <div class="banner-flex-center show-border">

    <div class="first-block">
      Social trading создан для тех кто ищет максимальную прибыль и минимальный риск. Богатый выбор
      управляющих, невероятный контроль над инвестициями и возможность общения с трейдерами.
      Инновационная платформа для начинающих и проффесиональных инвесторов.
    </div>

    <div
      class="button rounded registration"
      v-ripple
      >
      РЕГИСТРАЦИЯ
    </div>

  </div>
</template>

<script>
  export default {
    name: "thirdBanner"
  }
</script>

<style scoped>
.first-block {
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 120%;
}
</style>
