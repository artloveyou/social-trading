<template>
  <v-tabs
    class="full-tabs"
    right
  >
    <v-tab
      class="custom-transform-class text-none"
      :id="`item-${item.title}`"
      v-for="(item, i) in items.pages"
      :key="i"
      :to="item.to"
      router>{{ item.title }}
    </v-tab>
  </v-tabs>
</template>

<script>
  import pages from '~/pages/pages'

  export default {
    components: {
      pages
    },
    data(){
      return{
        items: pages
      }
    }
  }
</script>

<style scoped>
  .v-tab {
    color: #000000;
    font-size: 15px;
    font-weight: normal;
    justify-content: center;
    letter-spacing: normal;
    padding: 0 16px;
  }
  .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active),
  .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon,
  .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
    color: #666666;
  }
  @media (max-width: 1270px) {
    .full-tabs {
      display: none;
    }
  }
  @media (min-width: 1270px) {
    .mobile-tabs {
      display: none;
    }
  }
</style>
