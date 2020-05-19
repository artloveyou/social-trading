<template>
  <div class="banner-flex-center show-border">

    <div class="first-block block-regular">
      Отслеживайте процент доходности трейдера за всё время торговли или за выбранный период.
      Торговую стратегию принято распределять по 3-м категориям в зависимости от показателей прибыльности.
      Банковский депозит &mdash; средняя доходность составляет <span class="first-block block-accent">5% в месяц</span>.
      Доход от инвестиций в акции международных компаний как правило
      не превышают <span class="first-block block-accent">15% в месяц</span> (на примере акций компании Apple). Средняя
      доходность в сервисе LiteForex Social Trading составляет <span class="first-block block-accent">48% в месяц</span>
      (на основе показателей топ 30 трейдеров в рейтинге).
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
