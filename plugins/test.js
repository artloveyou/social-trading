import Vue from 'vue'

Vue.directive('test',{
  bind: function() {
    console.log('test directive')
  }
})
