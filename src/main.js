// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// style site
import './assets/css/app.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// custom component
import Map from '@/components/Map/Map'
import dgrid from '@/components/Grid/Grid'

Vue.config.productionTip = false

// register DOM tag
Vue.component('ggmap', Map)
Vue.component('dgrid', dgrid)

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
