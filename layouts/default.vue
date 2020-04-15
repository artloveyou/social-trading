<template>
  <v-app id="inspire">

    <navigationDrawer/>

    <appBar/>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <nuxt/>
      </v-container>
    </v-content>

    <appFooter/>

  </v-app>
</template>

<script>
  import navigationDrawer from '~/layouts/default/navigationDrawer'
  import appBar from '~/layouts/default/appBar'
  import appFooter from '~/layouts/default/appFooter'

  export default {
    components: {
      navigationDrawer, appBar, appFooter
    }
  }
</script>
