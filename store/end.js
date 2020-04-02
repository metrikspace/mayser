export const actions = {
  SET_LEFT: ({ commit }, value) => {
    commit('setLeft', value);
  },
  SET_RIGHT: ({ commit }, value) => {
    commit('setRight', value);
  }
};
export const getters = {
  GET_DATA: (state) => state.end
};
export const mutations = {
  setLeft: (state, value) => {
    state.end = [parseInt(value), state.end[1]];
  },
  setRight: (state, value) => {
    state.end = [state.end[0], parseInt(value)];
  }
};
export const state = () => ({
  end: [0, 0]
});
