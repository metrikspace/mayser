export const actions = {
  SET_LEFT: ({ commit }, value) => {
    commit('setLeft', value);
  },
  SET_RIGHT: ({ commit }, value) => {
    commit('setRight', value);
  }
};
export const getters = {
  GET_DATA: (state) => state.current
};
export const mutations = {
  setLeft: (state, value) => {
    state.current = [parseInt(value), state.current[1]];
  },
  setRight: (state, value) => {
    state.current = [state.current[0], parseInt(value)];
  }
};
export const state = () => ({
  current: [0, 0]
});
