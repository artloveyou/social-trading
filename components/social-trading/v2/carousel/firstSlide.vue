<template>
  <v-carousel-item>

    <v-sheet
      :color="color"
      height="100%">
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >

        <v-col class="col-12 col-md-5 portrait-wrapper">

          <div class="portrait">
            <img class="portrait" src='~/assets/img/social-trading/v2/carousel.png'/>
          </div>

        </v-col>
        <v-col class="col-12 col-md-7">
          <div class="text-blocks">
            <div class="first-block">
              I'm professional trader for 7 years. Copy my acc if you're interested
              in stable passive income. One acc is for investors who has more than
              5k and the other acc is for those who want to start with less capital.
              Strategy for accounts is based on the risk so the results also are
              different on each. Hit me a message before the start if you have some questions.
            </div>
            <div class="second-block">
              @ProCapitalTrust
            </div>
            <div class="third-block">
              Michal Wrzeszcz
            </div>
            <div class="fourth-block">
              PROFITABILITY
            </div>
            <div class="fifth-block">
              102.10 %
            </div>
          </div>
        </v-col>

      </v-row>
    </v-sheet>

  </v-carousel-item>
</template>

<script>
  export default {
    data() {
      return {
        color: '#f3f3f3'
      }
    }
  }
</script>

<style scoped>
  .portrait-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .portrait {
    height: 300px;
    width: 300px;
    border-radius: 150px;
  }

  .text-blocks {
    padding: 30px 20px 30px 20px;
    max-width: 500px;
  }

  .first-block {
    color: #707070;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 140%;
    margin: 0 0 20px 0;
  }

  .second-block {
    color: #007FD8;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 140%;
  }

  .third-block {
    color: #007FD8;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 140%;
    margin: 0 0 20px 0;
  }

  .fourth-block {
    color: #707070;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 140%;
  }

  .fifth-block {
    color: #47BF6F;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 140%;
  }

</style>
