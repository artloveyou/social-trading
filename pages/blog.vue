<template>
  <v-layout>
    <v-flex class="text-center">

      <div
        class="animation-start"
        v-scroll="handleScroll"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque amet harum aut ab veritatis earum porro
          praesentium ut corporis. Quasi provident dolorem officia iure fugiat, eius mollitia sequi quisquam.</p>
      </div>

    </v-flex>
  </v-layout>
</template>

<script>
  export default {

    methods: {
      handleScroll: function (evt, el) {
        if (window.scrollY > 90) {
          console.log('test scroll');
          el.classList.add('animation-end')
          // el.setAttribute(
          //   'style',
          //   'opacity: 1; transform: translate3d(0, -10px, 0)'
          // )
        } else {
          el.classList.remove('animation-end');
        }
      }
    }

  }
</script>

<style>
  .test {
    border: 1px solid red;
    height: 50vh;
  }

  .slide-block {
    border: 1px solid green;
    height: 50vh;
  }

  .animation-start {
    opacity: 0;
    transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  .animation-end {
    opacity: 1;
    transform: translate3d(0, -10, 0);
  }
</style>
