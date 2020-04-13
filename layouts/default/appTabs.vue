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
  @media (max-width: 1200px) {
    .full-tabs {
      display: none;
    }
  }
  @media (min-width: 1200px) {
    .mobile-tabs {
      display: none;
    }
  }
</style>
