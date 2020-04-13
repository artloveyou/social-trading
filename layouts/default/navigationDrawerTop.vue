<template>
  <v-row>
    <v-col>
      <languageSelector />
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
  .icon-cross-drawer {
    padding: 15px 15px 27px 0;
  }
  .icon-cross-drawer svg{
    height: 20px;
  }
</style>
