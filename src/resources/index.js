import RestaurantProvider from './restaurant_provider'

// Give arg to provider to start endpoint with specific path for example = xxx.com/api/person
export const RestaurantService = new RestaurantProvider('restaurant')
