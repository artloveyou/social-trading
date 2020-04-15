<template>
  <v-card style="max-width: 300px">
    <v-row no-gutters>
      <v-col class="d-flex justify-center">
        <v-avatar
          class="avatar"
          size="150"
        >
          <img
            src='~/assets/img/avatar.png'
            alt="ColbyMartin"
          >
        </v-avatar>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="name d-flex justify-center">
        @ColbyMartin
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="profitability d-flex justify-center">
        Доходность
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="profitability-number d-flex justify-center">
        220.90%
      </v-col>
    </v-row>
    <LineChart :labels="labels" :data="data"/>
    <div class="chart-bottom"></div>
    <v-row no-gutters>

      <v-col class="card-footer start" cols="4">
        <div class="card-footer-description">Копируют</div>
        <div class="card-footer-value">29</div>
      </v-col>
      <v-col class="card-footer" cols="6">

        <div class="card-footer-description">В управлении</div>
        <div class="card-footer-value">~ 25 000 USD</div>
      </v-col>
      <v-col class="card-footer end" cols="2">
        <div class="card-footer-description">Риск</div>
        <div class="card-footer-value">4</div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  import LineChart from '~/components/charts/LineChart.vue'

  export default {
    components: {
      LineChart
    },
    data() {
      return {
        labels: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'
        ],
        data: [
          1.22545, 1.22341, 1.22751, 1.22624, 1.22331, 1.2225, 1.22395, 1.22376, 1.22342, 1.22268, 1.22531, 1.22675, 1.23085, 1.22999, 1.23067, 1.22904,
          1.23545, 1.22541, 1.23751, 1.23624, 1.23331, 1.2325, 1.23395, 1.23376, 1.23342, 1.23268, 1.23531, 1.23675, 1.23085, 1.23999, 1.24067, 1.25904,
          1.25545, 1.25541, 1.25751, 1.25624, 1.25331, 1.2525, 1.25395, 1.25376, 1.25342, 1.25268, 1.25531, 1.23675, 1.25085, 1.25999, 1.25067, 1.25904,
          1.26545, 1.26541, 1.26751, 1.26624, 1.26331, 1.2625, 1.26395, 1.26376, 1.26342, 1.26268, 1.26531, 1.26675, 1.26085, 1.26999, 1.26067, 1.26904,
        ]
      }
    }
  }
</script>

<style scoped>
  .avatar {
    margin: 15px 0 0 0;
  }

  .name {
    font-weight: bold;
    margin: 10px 0 0 0;
    color: #2F4A69;
    font-size: 1.1em;
  }

  .profitability {
    margin: 17px 0 0 0;
    color: #9CA3A7;
    font-size: 0.8em;
  }

  .profitability-number {
    color: #00C06A;
    line-height: 1;
    font-weight: 500;
    font-size: 3.0em;
  }

  .chart-bottom {
    height: 40px;
    background-color: #DCF0FB;
  }

  .card-footer {
    padding: 15px 5px;
    border-top: 1px solid #dcdfe2;
    background-color: #EBEEF1;
  }

  .start {
  padding-left: 15px;
  }

  .card-footer-description {
    font-size: 0.8em;
    color: #8F959A;
  }

  .card-footer-value {
    color: #515F79;
    font-weight: 600;
  }
</style>
