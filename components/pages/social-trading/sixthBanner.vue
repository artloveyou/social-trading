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
      <v-col class="col-12 col-sm-3">
        <div class="mini-card maximum">
          <img src="~/assets/img/iconMaximum.svg"/>
          <p>Максимальная относительная просадка</p>
        </div>

      </v-col>
      <v-col class="col-12 col-sm-3">

      </v-col>
      <v-col class="col-12 col-sm-3">

      </v-col>
      <v-col class="col-12 col-sm-3">

      </v-col>
    </v-row>
  </div>
</template>

<script>
  import iconMaximum from '~/assets/img/iconMaximum.vue'

  export default {
    components: {
      iconMaximum
    }
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
    justify-content: center;
    align-items: center;
    align-content: stretch;
    border: 2px solid;
    border-radius: 5px 5px;
  }

  .maximum {
    border-color: #F8E49E;
  }

  .maximum svg {
    fill: #F8E49E;
  }
</style>
