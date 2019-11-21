import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    result: 0
  },
  getters: {
    tenResult: state => {
      return state.result * 10;
    },
    nameResult: state => {
      return state.result + " name result";
    }
  },
  mutations: {
    //thay doi reault o state, nen se thay doi tat ca cac component con
    increment(state) {
      state.result++;
    },
    decreatement(state){
      state.result--;
    }
  },
  actions:{
    increment: ({commit}) => {
      commit("increment");
    }
  }
})