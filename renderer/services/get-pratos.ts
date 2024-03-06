import { apiURL, http } from '../config/axios'

async function getPratos() {
  try {
    const response = await http.get(`${apiURL}/api/v1.0/itens`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data
  } catch (error) {
    console.error('Erro ao obter os pratos:', error)
    throw error
  }
}

export { getPratos }
