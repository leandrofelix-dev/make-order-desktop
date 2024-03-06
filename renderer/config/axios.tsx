import axios from 'axios'
import 'dotenv/config'

const apiURL = process.env.API_URL
const apiToken = process.env.API_TOKEN

const http = axios.create({
  baseURL: apiURL,
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Authorization': `Bearer ${apiToken}`
  }
})

export { http }
