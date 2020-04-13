<template>
  <v-app-bar
    app
    height="100"
    color="white"
    light
  >

    <logo-full/>

    <v-tabs
      right
      >
      <v-tab
        :id="`item-${item.title}`"
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router>{{ item.title }}
      </v-tab>
    </v-tabs>

    <div class="text-center ma-2">
      <v-btn rounded color="primary" dark>Open account</v-btn>
    </div>

    <div class="text-center">
      <v-btn rounded outlined color="primary" dark>Sign in</v-btn>
    </div>

    <languagesSelector />

    <v-app-bar-nav-icon @click.stop="$store.state.drawer = !$store.state.drawer"/>


  </v-app-bar>

</template>

<script>
  import logoFull from '~/components/logo/logoFull'
  import LanguagesSelector from '~/components/layouts/LanguagesSelector.vue'

  export default {
    components: {
      logoFull,
      LanguagesSelector
    },
    data() {
      return {
        items: [
          {
            title: 'About us',
            to: '/about-us'
          },
          {
            title: 'For Traders',
            to: '/for-traders'
          },
          {
            title: 'Social Trading',
            to: '/social-trading'
          },
          {
            title: 'Promotions',
            to: '/promotions'
          },
          {
            title: 'Partnership',
            to: '/partnership'
          },
          {
            title: 'Blog',
            to: '/blog'
          }
        ],
      }
    }
  }
</script>

<style scoped>

</style>
