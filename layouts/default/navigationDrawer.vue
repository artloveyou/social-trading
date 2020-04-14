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

    <v-list>
      <v-list-item
        :id="`item-${item.title}`"
        v-for="(item, i) in items.pages"
        :key="i"
        :to="item.to"
        router>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
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
  import pages from '~/pages/pages'

  export default {
    components: {
      logo,
      languageSelector,
      navigationDrawerTop,
      signUpMobile, signInMobile,
      pages
    },
    data() {
      return {
        items: pages
      }
    },
  }
</script>

<style scoped>
  @media (min-width: 600px) {
    .signUpMobile, .signInMobile {
      display: none;
    }
  }
</style>
