export const actions = {
  SET_LEFT: ({ commit }, value) => {
    commit('setLeft', value);
  },
  SET_RIGHT: ({ commit }, value) => {
    commit('setRight', value);
  }
};
export const getters = {
  GET_DATA: (state) => state.reject
};
export const mutations = {
  setLeft: (state, value) => {
    state.reject = [parseInt(value), state.reject[1]];
  },
  setRight: (state, value) => {
    state.reject = [state.reject[0], parseInt(value)];
  }
};
export const state = () => ({
  reject: [0, 0]
});
