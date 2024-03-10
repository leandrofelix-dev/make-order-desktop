import { apiURL, http } from '../config/axios'

async function criarPrato(item: any) {
  try {
    const response = await http.post(`${apiURL}/api/v1.0/itens/create`, item, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    })
    return response.data
  } catch (error) {
    console.error('Erro ao obter os pratos:', error)
    throw error
  }
}

export { criarPrato }
