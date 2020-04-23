<template>
  <component :is="pageType" />
</template>

<script>
  import pageFull from '~/components/pages/social-trading/pageFull.vue'
  import pageMobile from '~/components/pages/social-trading/pageMobile.vue'

  export default {
    components: {
      pageFull, pageMobile
    },
    data(){
      return {
        width: 1600,
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
      pageType: function () {
        return this.window.width > this.width ? 'pageFull' : 'pageMobile';
      }
    }
  }
</script>



