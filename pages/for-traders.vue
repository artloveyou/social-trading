<template>

  <div class="fullpage-wrapper">

    <div class="fullpage-container">

      <div class="button-group">
        <button type="button" :class="{active:index ==0}" @click="moveTo(0)">first page</button>
        <button type="button" :class="{active:index ==1}" @click="moveTo(1)">Second page</button>
        <button type="button" :class="{active:index ==2}" @click="moveTo(2)">Third page</button>
        <button type="button" v-for="btn in pageNum" :class="{active:index == btn + 2}" @click="moveTo(btn+2)">page {{btn+2}}
        </button>
        <button type="button" @click="showPage()">add page</button>
      </div>

      <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
        <div class="page-1 page">
          <h1 v-animate="{value: 'bounceInRight'}">Hello page 1</h1>
        </div>
        <div class="page-2 page">
          <h1>Hello page 2</h1>
        </div>
        <div class="page-3 page">
          <h1>Hello page 3</h1>
        </div>
        <div class="page-2 page" v-for="page in pageNum">
          <h2 class="part-2" v-animate="{value: 'bounceInRight'}">page {{page}}</h2>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'Fullpage',
    layout: 'short',
    data() {
      return {
        index: 0,
        pageNum: 0,
        opts: {
          start: 0,
          dir: 'v',
          loop: false,
          duration: 1,
          beforeChange: function (ele, current, next) {
            console.log('before', current, next)
            this.index = next
          },
          afterChange: function (ele, current) {
            this.index = current
            console.log('after', current)
          }
        }
      }
    },
    methods: {
      moveTo: function (index) {
        this.$refs.fullpage.$fullpage.moveTo(index, true)
      },
      showPage: function () {
        this.pageNum++
        this.$refs.fullpage.$fullpage.$update()
      }
    }
  }
</script>

<style>
  .container{
    padding: 0;
  }

  .fullpage-wrapper {
    border: 1px solid red;
    position: relative;
    width: 100%;
    height: 100vh;
  }

  .fullpage-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
  }

  .page {
    display: block;
    text-align: center;
    font-size: 26px;
    color: #eee;
  }

  .page-1 {
    padding-top: 100px;
    background: #1bbc9b;
  }

  .page-2 {
    padding-top: 100px;
    background-color: rgb(75, 191, 195);
  }

  .page-3 {
    padding-top: 50px;
    background: #aabbcc;
  }

  h3,
  p {
    font-size: 16px;
  }

  .button-group {
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 9;
  }

  .button-group button {
    display: inline-block;
    margin: 10px;
    color: #000;
    background: #fff;
    background: rgba(255, 255, 255, .5);
    -webkit-border-radius: 10px;
    border-radius: 10px;
    padding: 9px 18px;
    border: none;
    outline: none;
  }

  .button-group button.active {
    background: rgba(0, 0, 0, .5);
    color: #fff;
  }
</style>
