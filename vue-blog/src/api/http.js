import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '' : '',
  timeout: 1000,
  withCredentials: true
})

//  Add a request interceptor
instance.interceptors.request.use(
  axiosRequestConfig => axiosRequestConfig,
  error => Promise.reject(error)
)

//  Add a response interceptor
instance.interceptors.response.use(
  axiosResponse => {
    const response = axiosResponse.data
    /**
     * {
     *   data: {},
     *   status: 200,
     *   statusText: 'OK'
     *   header\config\request
     * }
     */
    console.log(`axiosResponse: ${axiosResponse.status}`)
    return response
  },
  error => {
    if (error.response) {
      const errCode = error.response.status
      switch (errCode) {
        case 404:
          console.log(404)
          break
        default:
          console.log('others')
          break
      }
    }
    return Promise.reject(error.message)
  }
)

export default instance
