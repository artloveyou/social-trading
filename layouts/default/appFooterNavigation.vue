<template>
  <v-row>
    <v-col>
      <v-divider></v-divider>
      <appTabsFooter/>
      <v-divider></v-divider>
    </v-col>
  </v-row>
</template>

<script>
  import appTabsFooter from '~/layouts/default/appTabsFooter'

  export default {
    components: {
      appTabsFooter
    }
  }
</script>

<style scoped>

</style>
