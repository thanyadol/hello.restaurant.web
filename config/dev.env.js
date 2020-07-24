'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GOOGLE_MAP_API_KEY: '"AIzaSyCC6Y7lm-jYMe34svFfgQlgL057Kpb9Po8"',
  CRUD_BASE_URL: '"https://localhost:5001/api/1.0/"'
})
