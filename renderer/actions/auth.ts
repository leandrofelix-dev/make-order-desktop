'use client' 
import { http } from '../config/axios'
import { store } from '../config/store'

type Login = {
  email: string
  senha: string
}

async function authenticate(data: Login): Promise<void> {
  console.log(
    'loginParams: ' + data.email + ' ' + data.senha
  )
  await http
    .post('/auth', {
      email: data.email,
      senha: data.senha,
    })
    .then((response) => store.set('authToken', response.data.token))
    .catch((error) => {
      console.log('Erro ao fazer login')
      return error
    })
}

export { authenticate }
