<template>
  <div
    v-intersect="onIntersect">
    <v-row>
      <v-col class="col-12 center">
        <div class="load-banner"
             :class="showBanner">
          <div
            :class="animate">
            <img class="img risk" src="~/assets/img/3.png"/>
            <h4>УРОВЕНЬ РИСКА</h4>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>

      <v-col class="col-12 col-md-3 d-flex justify-center">
        <div
          class="mini-card maximum-start"
          :class="maximumAnimate"
        >
          <img src="~/assets/img/iconMaximum.svg"/>
          <div class="mini-card-description">Максимальная относительная просадка</div>
        </div>
      </v-col>

      <v-col class="col-12 col-md-3 d-flex justify-center">
        <div
          class="mini-card deposit-start"
          :class="depositAnimate"
        >
          <img src="~/assets/img/iconDeposit.svg"/>
          <div class="mini-card-description">Максимальная загрузка депозита</div>
        </div>
      </v-col>

      <v-col class="col-12 col-md-3 d-flex justify-center">
        <div
          class="mini-card clock-start"
          :class="clockAnimate"
        >
          <img src="~/assets/img/iconClock.svg"/>
          <div class="mini-card-description">Срок жизни торгового счёта</div>
        </div>
      </v-col>

      <v-col class="col-12 col-md-3 d-flex justify-center">
        <div
          class="mini-card scale-start"
          :class="scaleAnimate"
        >
          <img src="~/assets/img/iconScale.svg"/>
          <div class="mini-card-description">Размер кредитного плеча</div>
        </div>
      </v-col>

    </v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isIntersecting: false,
        showBanner: false,
        animate: false,
        maximumAnimate: false,
        maximumAnimateTimeout: {},
        depositAnimate: false,
        depositAnimateTimeout: {},
        clockAnimate: false,
        clockAnimateTimeout: {},
        scaleAnimate: false,
        scaleAnimateTimeout: {},
      }
    },
    methods: {
      onIntersect(entries, observer) {
        this.isIntersecting = entries[0].isIntersecting
        if (this.isIntersecting === true) {
          this.animate = 'animate-digit'
          this.showBanner = 'show-banner'
          this.maximumAnimateTimeout = setTimeout(() => {
            this.maximumAnimate = 'maximum-end'
          }, 500)
          this.depositAnimateTimeout = setTimeout(() => {
            this.depositAnimate = 'deposit-end'
          }, 1000)
          this.clockAnimateTimeout = setTimeout(() => {
            this.clockAnimate = 'clock-end'
          }, 1500)
          this.scaleAnimateTimeout = setTimeout(() => {
            this.scaleAnimate = 'scale-end'
          }, 2000)
        } else {
          this.animate = 'none'
          this.showBanner = 'none'
          this.maximumAnimate = 'none'
          this.depositAnimate = 'none'
          this.clockAnimate = 'none'
          this.scaleAnimate = 'none'
        }
      }
    }
  }
</script>

<style>
  .animate-digit {
    animation: animate-digit 1s 1 ease-in-out;
  }

  @keyframes animate-digit {
    0% {
      transform: scale3d(3, 3, 3);
      opacity: 0;
    }
    100% {
      transform: scale3d(1, 1, 1);
      opacity: 1;
    }
  }

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

  .maximum-start {
    border-color: #F8E49E;
    transition: all 1s ease-in-out;
  }

  .maximum-end {
    -webkit-box-shadow: 0px 0px 38px 12px #F8E49E;
    -moz-box-shadow: 0px 0px 38px 12px #F8E49E;
    box-shadow: 0px 0px 38px 12px #F8E49E;
    border-color: #F8E49E;
  }

  .deposit-start {
    border-color: #9BAFE2;
    transition: all 1s ease-in-out;
  }

  .deposit-end {
    -webkit-box-shadow: 0px 0px 38px 12px #9BAFE2;
    -moz-box-shadow: 0px 0px 38px 12px #9BAFE2;
    box-shadow: 0px 0px 38px 12px #9BAFE2;
    border-color: #9BAFE2;
  }

  .clock-start {
    border-color: #A4EED0;
    transition: all 1s ease-in-out;
  }

  .clock-end {
    -webkit-box-shadow: 0px 0px 38px 12px #A4EED0;
    -moz-box-shadow: 0px 0px 38px 12px #A4EED0;
    box-shadow: 0px 0px 38px 12px #A4EED0;
    border-color: #A4EED0;
  }

  .scale-start {
    border-color: #F5C1E8;
    transition: all 1s ease-in-out;
  }

  .scale-end {
    -webkit-box-shadow: 0px 0px 38px 12px #F5C1E8;
    -moz-box-shadow: 0px 0px 38px 12px #F5C1E8;
    box-shadow: 0px 0px 38px 12px #F5C1E8;
    border-color: #F5C1E8;
  }
</style>
