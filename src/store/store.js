import Vue from 'vue'
import Vuex from 'vuex'
import Result from './modules/Result'

//import tat ca chi tiet trong module actions o duong dan ./actions
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {

    value: ""
  },
  getters,
  mutations,
  actions,
  modules: {
    Result
  }
})

