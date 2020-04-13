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
<!--    <v-footer-->
<!--      color="cyan"-->
<!--      app-->
<!--    >-->
<!--      <v-spacer/>-->

<!--      <span class="white&#45;&#45;text">&copy; 2019</span>-->
<!--    </v-footer>-->
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
