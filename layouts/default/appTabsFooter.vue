<template>
  <v-tabs
    centered
    center-active
    hide-slider
    show-arrows
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

</style>
