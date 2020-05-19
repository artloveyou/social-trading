<template>
  <div class="banner-flex-center show-border">
    <div class="content">
      <div class="first-block block-regular">
        <span class="first-block block-accent">Доходность</span>
        <br/>
        Больше, чем вы ожидаете.
        <br/>
        Быстрее, чем это принято.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "fifthBanner"
  }
</script>

<style scoped>
  .content{
    margin: 100px 0 50px 0;
    max-width: 980px;
  }

  .first-block {
    font-style: normal;
    font-weight: bold;
    font-size: 70px;
    line-height: 120%;
    margin: 100px 0 50px 0;
  }

  @media (max-width: 800px) {
    .first-block {
      font-size: 26px;
      margin: 10px 0 10px 0;
    }
  }

  .block-regular {
    color: #000000;
  }

  .block-accent {
    color: #707070;
  }
</style>
