import axios from 'axios'
import 'dotenv/config'

const http = axios.create({
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
  }
})

const apiURL = 'https://make-order-api-98b5f8f0c48a.herokuapp.com'

export { http, apiURL }
