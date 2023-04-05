export default {
  state: {
    hello: 'Kuropenguin'
  },
  getters: {
    getHello: state => state.hello
  },
  mutations: {
    SET_HELLO(state, value) {
      state.hello = value
    }
  },
  actions: {
    setHello({ commit }, value) {
      commit('SET_HELLO', value)
    }
  }
}
