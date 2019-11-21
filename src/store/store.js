import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    result: 0,
    value: ""
  },
  getters: {
    tenResult: state => {
      return state.result * 10;
    },
    nameResult: state => {
      return state.result + " name result";
    },
    value: state => {
      return state.value
    }
  },
  mutations: {
    //thay doi reault o state, nen se thay doi tat ca cac component con
    increment(state) {
      state.result++;
    },
    decreatement(state) {
      state.result--;
    },
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions: {
    increment: ({ commit }) => {
      commit("increment");
    },
    asyncdecrement: ({ commit }) => {
      setTimeout(() => {
        commit('decreatement');
      }, 2000);
    },
    updateValue: ({ commit },payload) => {
      commit('updateValue', payload);
    }
  }
})