import { RestaurantService } from '../resources'

const restaurantModule = {
  namespaced: true,
  state: {
    restaurants: []
  },
  mutations: {
    SET_RESTAURANT (state, restaurants) {
      state.restaurants = restaurants
    }
  },
  actions: {
    setRestaurant ({ commit, state }, restaurants) {
      commit('SET_RESTAURANT', restaurants)
    },
    async listRestaurant ({ commit, state }, keyword) {
      let result = await RestaurantService.listRestaurant(keyword)
      console.log(result)
      commit('SET_RESTAURANT', result)
    }
  },
  getters: {
    listRestaurant (state) {
      return state.restaurants
    }
  }
}

export default restaurantModule
