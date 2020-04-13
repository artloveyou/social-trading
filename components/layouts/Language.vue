<template>
  <div class="lang-item">
    <div class="lang-flag">
      <component :is="name"/>
    </div>

    <div v-if="selector === true" class="lang-text selector">
      {{code}}
    </div>
    <div v-else class="lang-text">
      {{name}}
    </div>

    <div v-if="selector === true" class="lang-shevron">
      <iconShevron/>
    </div>
  </div>
</template>

<script>
  import iconShevron from '~/assets/icons/iconShevron'
  import Arabic from '~/assets/lang/Arabic'
  import English from '~/assets/lang/English'
  import French from '~/assets/lang/French'
  import German from '~/assets/lang/German'
  import Indonesian from '~/assets/lang/Indonesian'
  import Italian from '~/assets/lang/Italian'
  import Malay from '~/assets/lang/Malay'
  import Myanmar from '~/assets/lang/Myanmar'
  import Pashto from '~/assets/lang/Pashto'
  import Persian from '~/assets/lang/Persian'
  import Polish from '~/assets/lang/Polish'
  import Portuguese from '~/assets/lang/Portuguese'
  import Russian from '~/assets/lang/Russian'
  import Spanish from '~/assets/lang/Spanish'
  import Swahili from '~/assets/lang/Swahili'
  import Thai from '~/assets/lang/Thai'
  import Turkish from '~/assets/lang/Turkish'
  import Vietnamese from '~/assets/lang/Vietnamese'
  import Chinese from '~/assets/lang/Chinese'

  export default {
    props: ['selector', 'code', 'name'],
    components: {
      iconShevron,
      Arabic, English, French, German, Indonesian, Italian, Malay, Myanmar, Pashto, Persian,
      Polish, Portuguese, Russian, Spanish, Swahili, Thai, Turkish, Vietnamese, Chinese
    },
  }
</script>

<style scoped>
  .lang-flag {
    margin-left: 15px;
  }

  .lang-flag svg {
    padding-top: 2px;
    height: 32px;
    margin: 2px 10px 0 0;
  }

  .lang-text {
    text-transform: uppercase;
    text-align: left;
    font-size: 0.9em;
    font-weight: 400;
    /*color: #8e9aac;*/
    width: 30px;
  }

  .lang-text:hover {
    color: #3b4b68;
  }

  @media (max-width: 960px) {
    .selector {
      display: none;
    }
  }

  .lang-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
  }

  .lang-shevron {
    margin-left: auto;
    margin-right: 10px;
  }

  .lang-shevron svg {
    height: 7px;
    fill: #8e9aac;
  }
</style>
