// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// bootstrap style site
import './assets/css/app.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// custom component
import Map from '@/components/Map/Map'
import Keyword from '@/components/Keyword/Keyword'
import dgrid from '@/components/Grid/Grid'

// font aweasome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// register DOM tag
Vue.component('ggmap', Map)
Vue.component('keyword', Keyword)
Vue.component('dgrid', dgrid)

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'.replace,

  // fa icon render
  render: h => h(App)
}).$mount('#app')

// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
// require('../node_modules/font-awesome/css/font-awesome.min.css')

// require('./assets/css/layout.css')
// require('./assets/css/app.css')
