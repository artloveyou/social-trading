<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    disable-resize-watcher
    disable-route-watcher
    app
    right
  >

    <navigationDrawerTop />
    <signUpMobile class="signUpMobile"/>
    <signInMobile class="signInMobile"/>

    <v-list dense>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-contact-mail</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>
<script>
  import logo from '~/components/logo/logo'
  import languageSelector from '~/components/layouts/languageSelector'
  import navigationDrawerTop from '~/layouts/default/navigationDrawerTop'
  import signUpMobile from '~/layouts/default/signUpMobile'
  import signInMobile from '~/layouts/default/signInMobile'

  export default {
    components: {
      logo,
      languageSelector,
      navigationDrawerTop,
      signUpMobile, signInMobile
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
  @media (min-width: 600px) {
    .signUpMobile, .signInMobile {
      display: none;
    }
  }
</style>
