// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import './firebase'
import store from './store'

Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueFire)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
