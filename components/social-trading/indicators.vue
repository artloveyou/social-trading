<template>

  <div>

    <div class="banner-with-tab">

      <h1 class="banner-title-small banner-center pa-7">Доходность.
        <span class="grey-text">
          Больше, чем вы ожидаете. Отслеживайте процент доходности трейдера за всё время торговли или за выбранный
          период.
        </span>
      </h1>
    </div>

    <div class="indicators-wrapper pr-5 pl-5">

      <div
        class="indicators-splash"
        :class="animate">
        <h1 class="compare">Сравните</h1>
      </div>

      <div class="load-banner"
           :class="showBanner">
        <div>Банк депозит</div>
        <v-progress-linear
          background-opacity="0.1"
          rounded
          :value="values[0].value"
          color="grey"
          height="30"
        >
          <template v-slot="{ value }">
            <strong>{{ values[0].value }}% в мес.</strong>
          </template>
        </v-progress-linear>

        <br>

        <div>Акции Apple</div>
        <v-progress-linear
          background-opacity="0.1"
          rounded
          :value="values[1].value"
          color="grey"
          height="30"
        >
          <template v-slot="{ value }">
            <strong>{{ values[1].value }}% в мес.</strong>
          </template>
        </v-progress-linear>

        <br>

        <div>Social Trading</div>
        <v-progress-linear
          background-opacity="0.1"
          rounded
          :value="values[2].value"
          color="grey"
          height="30"
        >
          <template v-slot="{ value }">
            <strong>{{ values[2].value }}% в мес.</strong>
          </template>
        </v-progress-linear>
      </div>

      <div v-intersect="onIntersect"></div>

    </div>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        animate: false,
        showBanner: false,
        isIntersecting: false,

        values: [
          {
            value: 0,
            stop: 5,
          },
          {
            value: 0,
            stop: 15,
          },
          {
            value: 0,
            stop: 48,
          }
        ],

        timeout: {},
        interval: {},
        speed: 50
      }
    },

    methods: {

      onIntersect(entries, observer) {
        // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        this.isIntersecting = entries[0].isIntersecting
        if (this.isIntersecting === true) {
          this.animate = 'animate'
          this.showBanner = 'show-banner'
          this.timeout = setTimeout(() => {
            this.valueIncrement()
          }, 1000)
        }
      },

      valueIncrement: function () {
        this.interval = setInterval(() => {
          this.values.forEach(function (item) {
            // console.log(item.stop)
            if (item.value < item.stop) {
              item.value += 1
            }
          })
        }, this.speed)
      },

      valueClear: function () {
        clearTimeout(this.timeout)
        clearInterval(this.interval)
        this.values.forEach(function (item) {
          item.value = 0
        })
      }
    }
  }
</script>

<style scoped>
  .animate {
    animation: animate 1s 1 cubic-bezier(.79, .01, .78, .29);
  }

  @keyframes animate {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .indicators-wrapper {
    position: relative;
  }

  .indicators-splash {
    opacity: 0;
    z-index: 3;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
  }

  .compare {
    font-size: 6.5em;
    font-weight: 400;
  }

  @media (max-width: 1000px) {
    .compare {
      font-size: 3.5em;
    }
  }
</style>
