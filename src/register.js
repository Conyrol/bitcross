import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import registerPage from './registerPage.vue';
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(registerPage),
}).$mount('#registerPage')