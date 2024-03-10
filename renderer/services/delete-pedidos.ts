import { apiURL, http } from '../config/axios'

async function deletePedido(id: string) {
  try {
    const response = await http.delete(`${apiURL}/api/v1.0/pedidos/delete/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    })
    return response.data
  } catch (error) {
    console.error('Erro ao excluir o pedido:', error)
    throw error
  }
}

export { deletePedido }
