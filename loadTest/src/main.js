import Vue from 'vue'
import App from './App.vue'
import huoUI from 'testhuohuo'
Vue.use(huoUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
