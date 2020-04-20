<template>

  <v-row>
    <v-col class="banner">

      <div
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <h1 class="banner-text banner-title banner-center mb-7">Лучший сервис инвестиций</h1>
        <div class="banner-text description banner-center mb-7">
          Social trading создан для тех кто ищет максимальную прибыль и минимальный риск.
          Богатый выбор управляющих, невероятный контроль над инвестициями и возможность общения с трейдерами.
          Инновационная платформа для начинающих и профессиональных инвесторов.
        </div>
      </div>

      <v-btn
        class="mt-7"
        rounded
        x-large
        color="primary"
        dark
      >
        Регистрация
      </v-btn>
    </v-col>
  </v-row>

</template>

<style scoped>
  .banner {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;

    margin-top: -20px;
    height: 100vh;
    width: 100vw;
    background-color: #000000;
  }

  .banner-text {
    color: #ffffff;
  }

  .description {
    max-width: 600px;
  }
</style>
