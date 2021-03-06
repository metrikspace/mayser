export const actions = {
  SET_LEFT: ({ commit }, value) => {
    commit('setLeft', value);
  },
  SET_RIGHT: ({ commit }, value) => {
    commit('setRight', value);
  }
};
export const getters = {
  GET_DATA: (state) => state.ddstart
};
export const mutations = {
  setLeft: (state, value) => {
    state.ddstart = [parseInt(value), state.ddstart[1]];
  },
  setRight: (state, value) => {
    state.ddstart = [state.ddstart[0], parseInt(value)];
  }
};
export const state = () => ({
  ddstart: [0, 0]
});
