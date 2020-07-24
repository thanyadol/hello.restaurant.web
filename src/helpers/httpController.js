import axios from 'axios'

const baseURL = process.env.CRUD_BASE_URL

/**
 *
 * http response status code
 */

export const codeMessage = {
  0: 'Unknown',
  200: 'The server successfully returned the requested data.',
  201: 'New or modified data is successful.',
  202: 'A request has entered the background queue (asynchronous task).',
  204: 'The data was deleted successfully.',
  400: '400! The request was made with an error and the server did not perform any operations to create or modify data.',
  401: '401! User does not have permission (token, username, password is incorrect).',
  403: '403! The user is authorized, but access is forbidden.',
  404: '404! The request is made for a record that does not exist and the server does not operate.',
  406: '406! The format of the request is not available.',
  410: '410! The requested resource is permanently deleted and will not be retrieved.',
  422: '422! A validation error occurred when creating an object.',
  499: '499! Client closed request',
  500: '500! An error occurred on the server. Please check the server.',
  502: '502! Gateway error.',
  503: '503! The service is unavailable and the server is temporarily overloaded or maintained.',
  504: '504! The gateway timed out.'
}

// Create `axios` instance passing the newly created `cache.adapter`
const api = axios.create({
    adapter: false
  })

class HttpController {
  constructor () {
    this.cancelTokens = {}
  }

  fetch (url, options = {}, config = {}) {
    const _options = {
      method: (options && options.method ? options.method : 'GET'),
      data: (options && options.data ? options.data : null)
    }

    const headers = {}

    // set header
    /* if (options && options.headers) {
      Object.keys(options.headers).forEach(key => headers[key] = options.headers[key])
    } */

    // token
    // if (this.sessionToken) headers['Authorization'] = `Bearer ${this.sessionToken}`

    const axiosOptions = {
      url,
      headers,
      method: _options.method,
      data: _options.data
      // withCredentials: (process.env.NODE_ENV === 'production')
      // `axios-cache-adapter` options
      // cache: config.cache,
    }

    /* if (config.cancelToken) {
      this.cancelTokens[config.cancelToken] && this.cancelTokens[config.cancelToken].cancel()
      this.cancelTokens[config.cancelToken] = CancelToken.source()
      axiosOptions.cancelToken = this.cancelTokens[config.cancelToken].token
    } */

    return api.request(axiosOptions)
      .then(res => Promise.resolve(res.data))
      .catch(res => {
        return  Promise.reject({
          message: res.response.data.Type,
          status: res.response.status
        })
      })
  }

  transformPath (path) {
    let result = `${path}`
    if (result[0] === '/') result = result.slice(1)
    return result
  }

  query (path, options, config) {
    return this.fetch(`${baseURL}${this.transformPath(path)}`, options, config)
  }

  post (path, data, config) {
    return this.query(path, {
      method: 'POST',
      data
    }, config)
  }

  put (path, data, config) {
    return this.query(path, {
      method: 'PUT',
      data
    }, config)
  }

  delete (path, data, config) {
    return this.query(path, {
      method: 'DELETE',
      data
    }, config)
  }

  get (path, config) {
    return this.query(path, {}, config)
  }
}

export default new HttpController()
