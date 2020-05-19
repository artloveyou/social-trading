<template>
  <div class="banner-flex-center show-border">
    <screenTab :screen="'TabScreen.gif'" :gif="true" :tab="'TabFrame.png'"/>
  </div>
</template>

<script>
  import screenTab from '~/components/social-trading/v2/screenTab.vue'

  export default {
    components: {
      screenTab
    }
  }
</script>
