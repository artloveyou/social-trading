<template>
  <v-row>
    <v-col class="pa-0 ma-0">

      <div class="banner">

        <div class="img-hide"
             data-aos="slide-left"
             data-aos-duration="1000"
        >
        </div>

        <img class="img" src="~/assets/img/banner11.png"/>

        <div class="banner-content"
             data-aos="slide-right"
             data-aos-duration="1000"
        >
          <h1 class="banner-title grey-text">Рискованно?</h1>
          <h1 class="banner-big-title">Возможно.</h1>
          <h1 class="banner-title grey-text">Прибыльно?</h1>
          <h1 class="banner-big-title">Однозначно да.</h1>
        </div>

        <div class="signature grey-text">
          <div data-aos="slide-left"
               data-aos-duration="1000"
          >// Наш самый успешный Ути Пути Мухаммед
          </div>
        </div>

      </div>

    </v-col>
  </v-row>
</template>

<script>

</script>

<style scoped>
  .banner {
    margin-top: 5em;
    position: relative;
  }

  .banner-content {
    position: absolute;
  }
  .signature {
    position: absolute;
    bottom: 50px;
    left: 120px;
  }
  @media (max-width: 600px) {
    .banner {
      margin-top: 1em;
    }
    .banner-content {
      top: 15px;
      left: 30px;
    }
    .signature {
      font-size: 0.6em;
      width: 150px;
      left: 30px;
      bottom: 15px;
    }
    .banner-title {
      font-size: 1em;
    }

    .banner-big-title {
      font-size: 1.3em;
    }
  }

  @media (min-width: 600px) and (max-width: 960px) {
    .banner-content {
      top: 60px;
      left: 50px;
    }

    .banner-title {
      font-size: 1.5em;
    }

    .banner-big-title {
      font-size: 2em;
    }
    .signature {
      font-size: 0.8em;
      left: 50px;
      bottom: 25px;
    }
  }
  @media (min-width: 960px) and (max-width: 1200px) {
    .banner-content {
      top: 70px;
      left: 50px;
    }

    .banner-title {
      font-size: 2em;
    }

    .banner-big-title {
      font-size: 3em;
    }
    .signature {
      left: 50px;
    }
  }
  @media (min-width: 1200px) {
    .banner-content {
      top: 20%;
      left: 120px;
    }
  }
</style>
