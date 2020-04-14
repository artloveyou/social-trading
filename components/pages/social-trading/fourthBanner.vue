<template>
  <div>
    <v-row>
      <v-col class="col-12 col-sm-1"></v-col>
      <v-col class="col-12 col-sm-10 center">
        <h1 class="banner-title-small banner-center pa-7">Доходность.
          <span class="grey-text">
          Больше, чем вы ожидаете. Отслеживайте процент доходности трейдера за всё время торговли или за выбранный
          период.
        </span>
        </h1>
        <img class="img" src="~/assets/img/banner4.png"/>
      </v-col>
      <v-col class="col-12 col-sm-1"></v-col>
    </v-row>
    <v-row>
      <v-col class="col-12 col-sm-1"></v-col>
      <v-col class="col-12 col-sm-10 center">
        <h1 class="banner-title-small banner-center pa-7">Стратегия.
          <span class="grey-text">
          Торговую стратегию принято распределять по 3-м категориям в зависимости от показателей прибыльности:
        </span>
        </h1>

        <div>
          <div>Банк депозит</div>
          <v-progress-linear
            background-opacity="0.1"
            rounded
            value="5"
            color="grey"
            height="30"
          >
            <template v-slot="{ value }">
              <strong>{{ value }}% в мес.</strong>
            </template>
          </v-progress-linear>

          <br>

          <div>Акции Apple</div>
          <v-progress-linear
            background-opacity="0.1"
            rounded
            value="15"
            color="grey"
            height="30"
          >
            <template v-slot="{ value }">
              <strong>{{ value }}% в мес.</strong>
            </template>
          </v-progress-linear>

          <br>

          <div>Social Trading</div>
          <v-progress-linear
            background-opacity="0.1"
            rounded
            value="48"
            color="grey"
            height="30"
          >
            <template v-slot="{ value }">
              <strong>{{ value }}% в мес.</strong>
            </template>
          </v-progress-linear>
        </div>

      </v-col>
      <v-col class="col-12 col-sm-1"></v-col>
    </v-row>
  </div>
</template>

