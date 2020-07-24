import RequestController from '../helpers/httpController'

/**
 * List restaurant place by keyword
 * 
 * @return {Promise}
 */
export const listRestaurant = keyword => RequestController.get(`restaurant/list?keyword==${keyword}`)