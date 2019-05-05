import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入全局依赖全局样式
import './assets/css/global.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
