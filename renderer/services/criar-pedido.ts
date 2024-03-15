import { apiURL, http } from '../config/axios'

async function criarPedido(item: any) {
  const data = {
    ...item,
    id: item.funcionario,
  }

  console.log(data)
  try {
    const response = await http.post(`${apiURL}/api/v1.0/pedidos/create`, data, {
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
