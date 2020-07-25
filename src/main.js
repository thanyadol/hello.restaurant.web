// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// import './assets/css/app.scss'
// import './assets/css/mobile.scss'
// import './assets/css/default.scss'
// import './assets/css/alter.scss'

// custom component
import Map from '@/components/Map/Map'

Vue.config.productionTip = false

// register DOM tag
Vue.component('ggmap', Map)

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
// require('../node_modules/font-awesome/css/font-awesome.min.css')

// require('./assets/css/layout.css')
// require('./assets/css/app.css')
