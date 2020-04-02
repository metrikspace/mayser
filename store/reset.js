export const actions = {
  SET_LEFT: ({ commit }, value) => {
    commit('setLeft', value);
  },
  SET_RIGHT: ({ commit }, value) => {
    commit('setRight', value);
  }
};
export const getters = {
  GET_DATA: (state) => state.reset
};
export const mutations = {
  setLeft: (state, value) => {
    state.reset = [parseInt(value), state.reset[1]];
  },
  setRight: (state, value) => {
    state.reset = [state.reset[0], parseInt(value)];
  }
};
export const state = () => ({
  reset: [0, 0]
});
