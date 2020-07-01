import Vue from 'vue'
import App from './App.vue'
import catImage from './assets/images/cat.jpg'

console.log('catImage:', catImage)

new Vue({
  render: h => h(App)
}).$mount('#app')