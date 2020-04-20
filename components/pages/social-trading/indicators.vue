<template>
  <div>
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

    <div v-intersect="onIntersect"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
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

        interval: {},
      }
    },

    methods: {

      onIntersect(entries, observer) {
        // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        this.isIntersecting = entries[0].isIntersecting
        if (this.isIntersecting === true) {
          this.valueIncrement()
        } else {
          this.valueClear()
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
        }, 60)
      },

      valueClear: function () {
        clearInterval(this.interval)
        this.values.forEach(function (item) {
          item.value = 0
        })
      }
    }
  }
</script>

<style scoped>

</style>
