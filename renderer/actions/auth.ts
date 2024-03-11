'use client'
import { http } from '../config/axios'

type Login = {
  email: string;
  senha: string;
};

async function authenticate(data: Login): Promise<void> {
  try {
    const body = data
    const response = await http.post('https://make-order-api-98b5f8f0c48a.herokuapp.com/api/v1.0/auth/login', body, {
      headers: { 
        'Content-Type': 'application/json'
      }
    })
    global.localStorage.setItem('token', response.data.token)
    global.localStorage.setItem('user', JSON.stringify({
      nome: 'Administrador',
      cargo: 'atendente',
      email: data.email
    }))
    global.location.href = '/dashboard'

  } catch (error) {
    console.error('Erro ao fazer login:', error)
    throw new Error('Ocorreu um erro ao fazer login. Por favor, verifique suas credenciais e tente novamente.')
  }
}

export { authenticate }
