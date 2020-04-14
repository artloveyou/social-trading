<template>
  <div class="selector">
    <v-menu offset-y>

      <template v-slot:activator="{ on }">
        <div
          class="lang-selector"
          v-on="on"
        >
          <language :selector="true" :code="activeCode" :name="activeName"/>
        </div>
      </template>

      <div class="lang-list-wrapper">
        <div class="lang-list"
             v-for="(lang, i) in items.languages"
             :key="i"
             v-on:click="setLang(lang.code, lang.name)"
        >
          <div class="lang-list-item" v-if="activeCode != lang.code">
            <language :code="lang.code" :name="lang.name"/>
          </div>
        </div>
      </div>

    </v-menu>
  </div>
</template>

<script>
  import languages from '~/assets/lang/languages';
  import language from '~/components/layouts/language'

  export default {
    components: {
      languages, language
    },
    data: () => ({
      selector: false,
      activeCode: 'en',
      activeName: 'English',
      items: languages
    }),
    methods: {
      setLang: function (code, name) {
        this.activeCode = code;
        this.activeName = name;
      }
    }
  }
</script>

<style scoped>
  .lang-selector {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 65px;
  }

  @media (max-width: 960px) {
    .lang-selector {
      height: 56px;
    }
  }

  .lang-list-wrapper {
    padding-top: 15px;
    background-color: white;
    width: 300px;
    height: 380px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
  }

  .lang-list {
    cursor: pointer;
  }

  .lang-list-item {
    height: 40px;
  }
</style>
