import { apiURL, http } from '../config/axios'

async function deletePrato(id: string) {
  try {
    const response = await http.delete(`${apiURL}/api/v1.0/itens/delete/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    })
    return response.data
  } catch (error) {
    console.error('Erro ao excluir o prato:', error)
    throw error
  }
}

export { deletePrato }
