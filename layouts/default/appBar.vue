<template>
  <v-app-bar
    app
    height="100"
    color="white"
    light
  >

    <logo/>

    <v-spacer/>

    <appTabs/>

    <signUp class="signUp"/>
    <signIn class="signIn"/>

    <languageSelector class="languageSelector"/>

    <v-app-bar-nav-icon
      class="mobile-tabs-icon"
      @click.stop="$store.state.drawer = !$store.state.drawer"
    />


  </v-app-bar>

</template>

<script>
  import logo from '~/components/logo/logo'
  import languageSelector from '~/components/layouts/languageSelector'
  import appTabs from '~/layouts/default/appTabs'
  import signUp from '~/layouts/default/signUp'
  import signIn from '~/layouts/default/signIn'

  export default {
    components: {
      logo,
      languageSelector,
      appTabs, signUp, signIn
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
  @media (max-width: 600px) {
    .signUp, .signIn, .languageSelector {
      display: none;
    }
  }
  @media (min-width: 1200px) {
    .mobile-tabs-icon {
      display: none;
    }
  }
</style>
