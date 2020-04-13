import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({

  state: {
    drawer: false
  },
  mutations: {
    closeDrawer(state) {
      state.drawer = false
    },
  }
});

export default store
