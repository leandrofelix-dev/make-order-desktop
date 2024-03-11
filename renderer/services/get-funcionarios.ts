import { apiURL, http } from '../config/axios'

async function getFuncionarios() {
  try {
    const response = await http.get(`${apiURL}/api/v1.0/funcionarios`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data
  } catch (error) {
    console.error('Erro ao obter os funcionarios:', error)
    throw error
  }
}

export { getFuncionarios }
