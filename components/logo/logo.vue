<template>
  <div :class="logoType">
    <component :is="logoType" />
  </div>
</template>

<script>
  import logoFull from '~/components/logo/logoFull'
  import logoMini from '~/components/logo/logoMini'

  export default {
    components: {
      logoFull, logoMini
    },
    data(){
      return {
        width: 0,
        window: {
          width: 0
        }
      }
    },
    created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        this.window.width = window.innerWidth;
      },
    },
    computed: {
      logoType: function () {
        return this.window.width > this.width ? 'logoFull' : 'logoMini';
      }
    }
  }
</script>

<style scoped>
  .logoFull svg {
    height: 43px;
  }
  .logoMini svg {
    height: 43px;
  }
</style>
