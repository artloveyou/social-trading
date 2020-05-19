<template>
  <div class="banner-flex-center show-border">

    <div class="first-block block-regular">
      <span class="first-block block-accent">Social trading</span> создан для тех кто ищет максимальную прибыль и минимальный риск.
      Богатый выбор
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
  .registration {
    margin-bottom: 210px;
  }
  .first-block {
    max-width: 980px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 120%;
    margin: 100px 0 50px 0;
  }

  @media (max-width: 800px) {
    .first-block {
      font-size: 26px;
      margin: 10px 0 50px 0;
    }
    .registration {
      margin-bottom: 50px;
    }
  }

  .block-regular {
    color: #707070;
  }
  .block-accent {
    color: #000000;
  }
</style>
