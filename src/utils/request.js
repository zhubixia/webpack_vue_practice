const { default: Axios } = require("axios");

import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 180 * 1000, // request timeout
})

/* 添加请求拦截器 */
service.interceptors.request.use(config => {
  console.log(config, 'config~~~~~~~~~~~~')
  return config
}, error => {
  console.log(error, 'error happens ~~~~')
  return Promise.reject(error)
})

/* 添加响应拦截器 */
service.interceptors.response.use(response => {
  console.log('请求响应成功拦截', response)
  return response
}, error => {
  return Promise.reject(error)
})

export default service