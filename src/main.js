import Vue from 'vue'
import mainPage from './mainPage.vue'
import './plugins/element.js'
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(mainPage),
}).$mount('#mainPage')