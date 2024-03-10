import { apiURL, http } from '../config/axios'

async function getPedidos() {
  try {
    const response = await http.get(`${apiURL}/api/v1.0/pedidos`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data
  } catch (error) {
    console.error('Erro ao obter os pedidos:', error)
    throw error
  }
}

export { getPedidos }
