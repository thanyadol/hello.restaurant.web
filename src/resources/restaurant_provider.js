import HttpRequest from './httpRequest'

class RestaurantProvider extends HttpRequest {
/**
 * List restaurant place by keyword
 *
 * @return {Promise}
 */
  listRestaurant (keyword) {
    console.log(keyword)
    return super.get(`restaurant/list?keyword=${keyword}`)
  }
}

export default RestaurantProvider
