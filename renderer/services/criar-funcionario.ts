import { apiURL, http } from '../config/axios'

async function criarFuncionario(funcionario: any) {
  try {
    const response = await http.post(`${apiURL}/api/v1.0/funcionarios/create`, funcionario, {
      headers: {
        Authorization: `${localStorage.getItem('token_reserve')}`,
      },
    })
    return response.data
  } catch (error) {
    console.error('Erro ao criar o funcionario:', error)
    throw error
  }
}

export { criarFuncionario }
