import Vue from 'vue'
import vueLazyDom from './lib/index.js'
import App from './App.vue'

Vue.use(vueLazyDom)

new Vue({
  el: '#app',
  render: h => h(App)
})
