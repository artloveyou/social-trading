<template>
  <div class="banner-flex-center show-border">
    <div class="first-block">LiteForex Social Trading</div>
    <div class="second-block">Лучший сервис инвестиций.</div>
  </div>
</template>

<script>
  export default {
    name: "firstBanner"
  }
</script>

<style scoped>
  .first-banner {
    border: 1px solid red;
  }
  .first-block {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 120%;
    margin: 150px 0 0 0;
  }
  .second-block {
    font-style: normal;
    font-weight: 500;
    font-size: 110px;
    line-height: 90%;
    text-align: center;
    max-width: 1000px;
    margin: 20px 0 200px 0;
  }
</style>
