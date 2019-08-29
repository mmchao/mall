import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
// import fastclick from 'fastclick'
import './assets/scss/index.scss'
import 'swiper/dist/css/swiper.css'

// fastclick.attach(document.body)

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1,
  error: require('@/assets/img/error.png'),
  loading: require('@/assets/img/loading.gif'),
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
