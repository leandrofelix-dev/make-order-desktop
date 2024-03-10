import { apiURL, http } from '../config/axios'

async function atualizaStatusPedido(id: string, pedido: any) {
  const newPedido = {
    ...pedido,
    status: 3,
  }

  console.log('newPedido', newPedido)

  try {
    const response = await http.patch(
      `${apiURL}/api/v1.0/pedidos/update/status/${id}`,
      newPedido,
      {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      }
    )
    return response.data
  } catch (error) {
    console.error('Erro ao atualizar status do pedidos:', error)
    throw error
  }
}

export { atualizaStatusPedido }
