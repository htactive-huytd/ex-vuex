import Vue from 'vue'
import Vuex from 'vuex'
import Result from './modules/Result'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {

    value: ""
  },
  getters: {

    value: state => {
      return state.value
    }
  },
  mutations: {

    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions: {

    updateValue: ({ commit }, payload) => {
      commit('updateValue', payload);
    }
  },
  modules: {
    Result
  }
})

