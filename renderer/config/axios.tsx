import axios from 'axios'


const http = axios.create({
  baseURL: 'https://make-order-api-98b5f8f0c48a.herokuapp.com/api/v1.0/',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
  }
})

export { http }
