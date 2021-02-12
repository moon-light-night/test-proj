import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardName: '',
    cardNameSecond: '',
    cardNameThird: '',
    cardNum: '',
    cardNumSecond: '',
    cardNumThird: '',
    cardmmyy: '',
    cardmmyySecond: '',
    cardmmyyThird: '',
    cardcvv: '',
    cardcvvSecond: '',
    cardcvvThird: '',
    cardfsname: '',
    cardfsnameSecond: '',
    cardfsnameThird: '',
    link: '',
    info: null,
    infoSecond: null,
    infoThird: null,
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
    setId(state, link) {
      state.link = link
    },
    setCardNameSecond(state, cardNameSecond) {
      state.cardNameSecond = cardNameSecond
    },
    setCardNameThird(state, cardNameThird) {
      state.cardNameThird = cardNameThird
    },
    setCardNumSecond(state, cardNumSecond) {
      state.cardNumSecond = cardNumSecond
    },
    setCardNumThird(state, cardNumThird) {
      state.cardNumThird = cardNumThird
    },
    setCardmmyySecond(state, cardmmyySecond) {
      state.cardmmyySecond = cardmmyySecond
    },
    setCardmmyyThird(state, cardmmyyThird) {
      state.cardmmyyThird = cardmmyyThird
    },
    setCardcvvSecond(state, cardcvvSecond) {
      state.cardcvvSecond = cardcvvSecond
    },
    setCardcvvThird(state, cardcvvThird) {
      state.cardcvvThird = cardcvvThird
    },
    setCardfsnameSecond(state, cardfsnameSecond) {
      state.cardfsnameSecond = cardfsnameSecond
      state.infoSecond = [
        state.cardNameSecond,
        state.cardNumSecond,
        state.cardmmyySecond,
        state.cardcvvSecond,
        state.cardfsnameSecond,
      ]
    },
    setCardfsnameThird(state, cardfsnameThird) {
      state.cardfsnameThird = cardfsnameThird
      state.infoThird = [
        state.cardNameThird,
        state.cardNumThird,
        state.cardmmyyThird,
        state.cardcvvThird,
        state.cardfsnameThird,
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
    passId(ctx, link) {
      ctx.commit('setId', link)
    },
    actionCardNameSecond(ctx, cardNameSecond) {
      ctx.commit('setCardNameSecond', cardNameSecond)
    },
    actionCardNameThird(ctx, cardNameThird) {
      ctx.commit('setCardNameThird', cardNameThird)
    },
    actionCardNumSecond(ctx, cardNumSecond) {
      ctx.commit('setCardNumSecond', cardNumSecond)
    },
    actionCardNumThird(ctx, cardNumThird) {
      ctx.commit('setCardNumThird', cardNumThird)
    },
    actionCardmmyySecond(ctx, cardmmyySecond) {
      ctx.commit('setCardmmyySecond', cardmmyySecond)
    },
    actionCardmmyyThird(ctx, cardmmyyThird) {
      ctx.commit('setCardmmyyThird', cardmmyyThird)
    },
    actionCardcvvSecond(ctx, cardcvvSecond) {
      ctx.commit('setCardcvvSecond', cardcvvSecond)
    },
    actionCardcvvThird(ctx, cardcvvThird) {
      ctx.commit('setCardcvvThird', cardcvvThird)
    },
    actionCardfsnameSecond(ctx, cardfsnameSecond) {
      ctx.commit('setCardfsnameSecond', cardfsnameSecond)
    },
    actionCardfsnameThird(ctx, cardfsnameThird) {
      ctx.commit('setCardfsnameThird', cardfsnameThird)
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
    returnCardName(state) {
      return state.cardName
    },
    returnLink(state) {
      return state.link
    },
    returnInfoSecond(state) {
      return state.infoSecond
    },
    returnInfoThird(state) {
      return state.infoThird
    },
    returnCardNameSecond(state) {
      return state.cardNameSecond
    },
    returnCardNameThird(state) {
      return state.cardNameThird
    },
    returnCardNumSecond(state) {
      return state.cardNumSecond
    },
    returnCardNumThird(state) {
      return state.cardNumThird
    },
    returnCardcvvSecond(state) {
      return state.cardcvvSecond
    },
    returnCardcvvThird(state) {
      return state.cardcvvThird
    },
  },
  modules: {},
})
