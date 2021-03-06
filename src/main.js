// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import io from 'socket.io-client'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.prototype.$io = io

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
