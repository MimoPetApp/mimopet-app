/* eslint-disable no-unused-vars */
import axios from 'axios'
import { getLocalToken } from './storage'

const axiosInstance = axios.create({
  baseURL: process.env.API,
  headers: {
    Accept: 'application/json'
  }
})

axiosInstance.interceptors.request.use(
  function (config) {
    const token = getLocalToken()
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export const Http = axiosInstance
