import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://114.33.145.3/api/`,
    withCredentials: true,
    // baseURL: window.location.protocol + '//' + window.location.host+'/api/',
  })
}
