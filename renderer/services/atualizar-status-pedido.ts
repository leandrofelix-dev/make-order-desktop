import { apiURL, http } from '../config/axios'
import { getPedidos } from './get-pedidos'

async function atualizaStatusPedido(id) {
  try {
    const pedidos = await getPedidos()
    const pedidoAtual = pedidos.find(p => p.id === id)

    if (!pedidoAtual) {
      throw new Error(`Pedido com o ID ${id} não encontrado.`)
    }

    const statusPedidos = ['PENDENTE', 'CONFIRMADO', 'CONCLUIDO']
    const statusAtualIndex = statusPedidos.indexOf(pedidoAtual.status_pedido)

    if (statusAtualIndex === -1) {
      throw new Error(`Status '${pedidoAtual.status_pedido}' inválido.`)
    }

    const novoStatusIndex = (statusAtualIndex + 1) % 3
    const novoStatus = statusPedidos[novoStatusIndex]

    const newPedido = {
      ...pedidoAtual,
      status_pedido: novoStatus,
    }

    console.log('-', pedidoAtual)
    console.log('+', newPedido)

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
