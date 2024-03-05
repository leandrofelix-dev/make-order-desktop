import axios from 'axios'
import { store } from './store'

const authToken = store.get('authToken')

if (!authToken) {
  console.error('Token not found')
  console.log('Token not found')
}


const http = axios.create({
  baseURL: 'https://make-order-api-98b5f8f0c48a.herokuapp.com/api/v1.0/',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    Authorization: `Bearer ${authToken}`,
  },
})

export { http }
