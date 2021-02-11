import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardName: '',
  },
  mutations: {
    setCardName(state, cardName) {
      state.cardName = cardName
    },
  },
  actions: {
    actionCardName(ctx, cardName) {
      ctx.commit('setCardName', cardName)
    },
  },
  modules: {},
})
