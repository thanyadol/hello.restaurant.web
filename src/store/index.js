import Vue from 'vue'
import Vuex from 'vuex'
import RestaurantModule from './restaurant_module'

// Make vue aware of Vuex
Vue.use(Vuex)

const modules = {
  Restaurant: RestaurantModule
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  modules
})
