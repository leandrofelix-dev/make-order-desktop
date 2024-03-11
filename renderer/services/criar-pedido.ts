import { apiURL, http } from '../config/axios'

async function criarPedido(item: any) {
  try {
    const response = await http.post(`${apiURL}/api/v1.0/pedidos/create`, item, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    })
    return response.data
  } catch (error) {
    console.error('Erro ao obter os pedidos:', error)
    throw error
  }
}

export { criarPedido }
