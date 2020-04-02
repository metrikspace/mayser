export const actions = {
  SET_LEFT: ({ commit }, value) => {
    commit('setLeft', value);
  },
  SET_RIGHT: ({ commit }, value) => {
    commit('setRight', value);
  }
};
export const getters = {
  GET_DATA: (state) => state.scrap
};
export const mutations = {
  setLeft: (state, value) => {
    state.scrap = [parseInt(value), state.scrap[1]];
  },
  setRight: (state, value) => {
    state.scrap = [state.scrap[0], parseInt(value)];
  }
};
export const state = () => ({
  scrap: [0, 0]
});
