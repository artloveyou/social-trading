<template>
  <v-row>
    <v-col class="language-selector-wrapper">
      <languageSelector class="language-selector"/>
    </v-col>
    <v-col class="d-flex justify-end">
          <v-btn
            class="icon-cross-drawer"
            icon
            @click="$store.commit('closeDrawer')"
          >
            <iconCross class="icon"/>
          </v-btn>
    </v-col>
  </v-row>
</template>

<script>
  import iconCross from '~/assets/icons/iconCross'
  import languageSelector from '~/components/layouts/languageSelector';

  export default {
    components: {
      languageSelector,
      iconCross
    }
  }
</script>

<style scoped>
  .language-selector-wrapper {
    padding: 20px 0 0 15px;
  }
  @media (min-width: 600px) {
    .language-selector {
      display: none;
    }
  }
  .icon-cross-drawer {
    margin: 15px 15px 27px 0;
  }
  .icon-cross-drawer svg{
    height: 20px;
  }
</style>
