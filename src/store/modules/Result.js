const state = {
  result: 0
};

const getters = {
  result: state => {
    return state.result;
  },
  tenResult: state => {
    return state.result * 10;
  },
  nameResult: state => {
    return state.result + " name result";
  }
};

const mutations = {
  //thay doi reault o state, nen se thay doi tat ca cac component con
  increment(state) {
    state.result++;
  },
  decreatement(state) {
    state.result--;
  }
};

const actions = {
  increment: ({ commit }) => {
    commit("increment");
  },
  asyncdecrement: ({ commit }) => {
    setTimeout(() => {
      commit('decreatement');
    }, 2000);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}