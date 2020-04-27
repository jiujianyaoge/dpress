import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import './logger'

import './core/lazy_use'
import './permission'
import '@/utils/filter' // global filter
import './components'
import { version } from '../package.json'

Vue.config.productionTip = false
Vue.prototype.VERSION = version

Vue.use(router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
