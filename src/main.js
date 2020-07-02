import Vue from 'vue'
import App from './App'
import Router from './router'
import store from './store'
import '@/styles/index.scss'

new Vue({
  store,
  Router,
  render: h => h(App)
}).$mount('#app')