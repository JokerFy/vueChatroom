import Vue from 'vue'
import App from './App'
import Mint from 'mint-ui'
import router from './router'
import 'mint-ui/lib/style.css'
import httpRequest from '@/utils/httpRequest'

Vue.use(Mint)
Vue.config.productionTip = false
// 挂载全局
Vue.prototype.$http = httpRequest

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
