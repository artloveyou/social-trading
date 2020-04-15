<template>
  <v-container>
    <socialIconsLine class="social"/>
    <appFooterNavigation/>
    <appFooterExplanation/>
    <appFooterLinks/>
  </v-container>
</template>

<script>
  import socialIconsLine from '~/assets/icons/socialIconsLine'
  import appFooterNavigation from '~/layouts/default/appFooterNavigation'
  import appFooterExplanation from '~/layouts/default/appFooterExplanation'
  import appFooterLinks from '~/layouts/default/appFooterLinks'

  export default {
    components: {
      socialIconsLine, appFooterNavigation, appFooterExplanation, appFooterLinks
    }
  }
</script>

<style>
  .social {
    margin-top: 5em;
  }
</style>
