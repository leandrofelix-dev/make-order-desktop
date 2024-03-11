import { apiURL, http } from '../config/axios'

async function atualizaStatusPedido(id, pedido) {
  const { preco, status_pedido, ...resto } = pedido

  // Remove o símbolo de moeda e espaços em branco e substitui a vírgula por ponto
  const precoNumerico = parseFloat(preco.replace(/[^\d,.]/g, '').replace(',', '.'))

  // Define o status inicial como 0 (aguardando confirmação) se não estiver definido
  let novoStatusPedido = status_pedido !== undefined ? status_pedido + 1 : 0

  // Limita o status entre 0 e 3
  novoStatusPedido = Math.min(Math.max(novoStatusPedido, 0), 3)

  const newPedido = {
    ...resto,
    preco: precoNumerico,
    status_pedido: novoStatusPedido,
  }

  try {
    const response = await http.patch(`${apiURL}/api/v1.0/pedidos/update/status/${id}`, newPedido, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
    return response.data
  } catch (error) {
    console.error('Erro ao atualizar status do pedido:', error)
    throw error
  }
}

export { atualizaStatusPedido }
