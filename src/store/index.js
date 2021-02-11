import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardName: '',
    cardNum: '',
    cardmmyy: '',
    cardcvv: '',
    cardfsname: '',
    info: [],
  },
  mutations: {
    setCardName(state, cardName) {
      state.cardName = cardName
    },
    setCardNum(state, cardNum) {
      state.cardNum = cardNum
    },
    setCardmmyy(state, cardmmyy) {
      state.cardmmyy = cardmmyy
    },
    setCardcvv(state, cardcvv) {
      state.cardcvv = cardcvv
    },
    setCardfsname(state, cardfsname) {
      state.cardfsname = cardfsname
      state.info = [
        state.cardName,
        state.cardNum,
        state.cardmmyy,
        state.cardcvv,
        state.cardfsname,
      ]
    },
  },
  actions: {
    actionCardName(ctx, cardName) {
      ctx.commit('setCardName', cardName)
    },
    actionCardNum(ctx, cardNum) {
      ctx.commit('setCardNum', cardNum)
    },
    actionCardmmyy(ctx, cardmmyy) {
      ctx.commit('setCardmmyy', cardmmyy)
    },
    actionCardcvv(ctx, cardcvv) {
      ctx.commit('setCardcvv', cardcvv)
    },
    actionCardfsname(ctx, cardfsname) {
      ctx.commit('setCardfsname', cardfsname)
    },
  },
  getters: {
    returnCardNum(state) {
      return state.cardNum
    },
    returnCardcvv(state) {
      return state.cardcvv
    },
    passInfoAboutNewCard(state) {
      return state.info
    },
  },
  modules: {},
})
