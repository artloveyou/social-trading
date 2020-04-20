<template>

  <div class="tab-wrapper">

    <img
      class="img" :src="tabScreen"
    />

    <div class="screen"
         data-aos="zoom-out"
         data-aos-duration="1000"
         data-aos-anchor-placement="top-center"
    >
      <img
        class="img" :src="imageScreen"
      />
    </div>

  </div>

</template>

<script>
  export default {
    props: ['screen', 'tab'],
    computed: {
      imageScreen() {
        return require(`~/assets/img/${this.screen}`)
      },
      tabScreen() {
        if (this.tab){
          return require(`~/assets/img/${this.tab}`)
        } else {
          return require(`~/assets/img/tab.png`)
        }
      },
    }
  }
</script>

<style scoped>
  .tab-wrapper {
    position: relative;
  }

  .screen {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
