import axios from 'axios';

export const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API
});

httpClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }

    config.headers['Content-Type'] = 'application/json';

    return config
  },
  error => {
    Promise.reject(error)
  }
)

httpClient.interceptors.response.use(
  response => {
    return response
  },
  function (error) {
    const originalRequest = error.config

    if (
      error.response.status === 401
    ) {
      //router.push('/login')
      return Promise.reject(error)
    }

    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true
    //   const refreshToken = localStorage.getItem('token')
    //   return axios
    //     .post('/auth/token', {
    //       refresh_token: refreshToken
    //     })
    //     .then(res => {
    //       if (res.status === 201) {
    //         localStorage.setToken(res.data.accessToken)
    //         axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    //         return axios(originalRequest)
    //       }
    //     })
    // }
    return Promise.reject(error)
  }
)
