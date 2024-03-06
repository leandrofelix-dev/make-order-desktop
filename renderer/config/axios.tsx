import axios from 'axios'
import 'dotenv/config'

const http = axios.create({
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
  }
})

export { http }
