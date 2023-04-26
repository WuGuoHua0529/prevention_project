import { createStore } from 'vuex';

const store = createStore({
  state () {
    return {
      headerHidden: false,
    }
  },
  mutations: {
    SET_HEADER_HIDDEN (state, value) {
      state.headerHidden = value
    }
  },
  actions: {
    setHeaderHidden ({ commit, state }, value) {
      this.commit('SET_HEADER_HIDDEN', value);
    }
  },
  getters: {
    getHeaderHidden: (state) => state.headerHidden
  }
});

export default store