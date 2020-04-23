<template>
  <div>
    <v-row>
      <v-col class="col-12 center">
        <img class="img risk" src="~/assets/img/3.png"/>
        <h4>УРОВЕНЬ РИСКА</h4>
      </v-col>
    </v-row>
    <v-row>

      <v-col class="col-12 col-md-3 d-flex justify-center">
        <div class="mini-card maximum">
          <img src="~/assets/img/iconMaximum.svg"/>
          <div class="mini-card-description">Максимальная относительная просадка</div>
        </div>
      </v-col>

      <v-col class="col-12 col-md-3 d-flex justify-center">
        <div class="mini-card deposit">
          <img src="~/assets/img/iconDeposit.svg"/>
          <div class="mini-card-description">Максимальная загрузка депозита</div>
        </div>
      </v-col>

      <v-col class="col-12 col-md-3 d-flex justify-center">
        <div class="mini-card clock">
          <img src="~/assets/img/iconClock.svg"/>
          <div class="mini-card-description">Срок жизни торгового счёта</div>
        </div>
      </v-col>

      <v-col class="col-12 col-md-3 d-flex justify-center">
        <div class="mini-card scale">
          <img src="~/assets/img/iconScale.svg"/>
          <div class="mini-card-description">Размер кредитного плеча</div>
        </div>
      </v-col>

    </v-row>
  </div>
</template>

<script>
  export default {
    name: "risk"
  }
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
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
    border: 2px solid;
    border-radius: 5px 5px;
    padding: 10px 10px;
    height: 80px;
    width: 350px;
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
