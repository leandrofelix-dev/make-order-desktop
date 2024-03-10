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
    global.localStorage.setItem('user', {
      name: 'Administrador',
      cargo: 'atendente',
      email: data.email
    }.toString())
    global.location.href = '/dashboard'

  } catch (error) {
    console.log('Erro ao fazer login:', error)
  }
}

export { authenticate }
