<template>
  <div>
    <v-row>
      <v-col class="col-12 col-sm-1"></v-col>
      <v-col class="col-12 col-sm-10 center">
        <h1 class="banner-title-small banner-center pa-7">Риск
          <span class="grey-text">
          может работать на вас. Уровень риска трейдеров варьируется от минимального со значением 1 и до максимального &mdash;
            10. Быстрая прибыль и высокий риск или консервативный подход &mdash; выбор за вами.
        </span>
        </h1>
        <img class="img" src="~/assets/img/banner6.png"/>
      </v-col>
      <v-col class="col-12 col-sm-1"></v-col>
    </v-row>
    <v-row>
      <v-col class="col-12 center">
        <img class="img risk" src="~/assets/img/3.png"/>
        <h4>УРОВЕНЬ РИСКА</h4>
      </v-col>
    </v-row>
    <v-row>

      <v-col class="col-12 col-md-3">
        <div class="mini-card maximum">
          <img src="~/assets/img/iconMaximum.svg"/>
          <div class="mini-card-description">Максимальная относительная просадка</div>
        </div>
      </v-col>

      <v-col class="col-12 col-md-3">
        <div class="mini-card deposit">
          <img src="~/assets/img/iconDeposit.svg"/>
          <div class="mini-card-description">Максимальная загрузка депозита</div>
        </div>
      </v-col>

      <v-col class="col-12 col-md-3">
        <div class="mini-card clock">
          <img src="~/assets/img/iconClock.svg"/>
          <div class="mini-card-description">Срок жизни торгового счёта</div>
        </div>
      </v-col>

      <v-col class="col-12 col-md-3">
        <div class="mini-card scale">
          <img src="~/assets/img/iconScale.svg"/>
          <div class="mini-card-description">Размер кредитного плеча</div>
        </div>
      </v-col>

    </v-row>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .center {
    text-align: center;
  }

  .risk {
    margin-top: 50px;
    max-width: 150px;
  }

  .mini-card {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
    border: 2px solid;
    border-radius: 5px 5px;
    padding: 10px 10px;
    height: 80px;
  }

  .mini-card-description {
    margin: 0 0 0 15px;
  }

  .maximum {
    border-color: #F8E49E;
  }
  .deposit {
    border-color: #9BAFE2;
  }
  .clock {
    border-color: #A4EED0;
  }
  .scale{
    border-color: #F5C1E8;
  }
</style>
