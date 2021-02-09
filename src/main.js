import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './registerServiceWorker'
import './profile/main.scss'

Vue.config.productionTip = false

Vue.use(VueAxios, axios, Vuelidate, Vuex, Vuetify)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
