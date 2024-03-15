import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { criarFuncionario } from '../../services/criar-funcionario'
import { Button } from '../../components/atoms/button'
import { HeadingOne } from '../../components/atoms/heading-one'
import { View } from '../../components/organisms/view'
import { v4 as uuid } from 'uuid'

export default function Register() {
  const router = useRouter() // Para redirecionamento
  const [registerData, setRegisterData] = useState({
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    dataNascimento: '', // Deixe-a inicialmente vazia para evitar problemas
    cargo: 'GARCOM'
  })
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'cpf') {
      const formattedCPF = value.replace(/\D/g, '') // Remove todos os caracteres não numéricos
      setRegisterData((prevState) => ({
        ...prevState,
        cpf: formattedCPF,
      }))
    } else {
      setRegisterData((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }
  }

  const formatDataNascimento = (dataNascimento) => {
    const date = new Date(dataNascimento)
    const formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}T00:00:00.000Z`
    return formattedDate
  }

  const handleSubmit = async () => {
    // Verificar se todos os campos obrigatórios foram preenchidos
    if (!registerData.nome || !registerData.cpf || !registerData.email || !registerData.senha || !registerData.dataNascimento) {
      setErrorMessage('Por favor, preencha todos os campos.')
      return
    }
    setIsLoading(true)
    try {
      const formattedDataNascimento = formatDataNascimento(registerData.dataNascimento)
      await criarFuncionario({ ...registerData, dataNascimento: formattedDataNascimento, id: uuid() })
      setSuccessMessage('Registro realizado com sucesso!')
      setErrorMessage('')
      router.push('/conta/login') // Redirecionamento para a tela de login
    } catch (error) {
      console.error('Erro ao fazer registro:', error)
      if (error.response && error.response.data && error.response.data.detail) {
        setErrorMessage(error.response.data.detail)
      } else {
        setErrorMessage(
          'Ocorreu um erro ao fazer o registro. Por favor, verifique os dados e tente novamente.'
        )
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View>
      <div className="flex flex-col items-center justify-center gap-4 pt-5">
        <div className="flex justify-center items-center text-5xl text-slate_900 pt-24 z-index mb-12">
          <h1 className="font-bold">Make</h1>
          <h1>order</h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-slate_200 rounded-lg w-[32rem] px-20 py-12 max-w-xl max-h-xl flex flex-col gap-3 items-center justify-center">
            <div className="w-full">
              <HeadingOne>Registrar-se</HeadingOne>
            </div>
            {successMessage && (
              <div className="border-l-4 text-success border-success p-3 w-full font-semibold">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="border-l-4 text-danger border-danger p-3 w-full font-semibold">
                {errorMessage}
              </div>
            )}
            <div className="flex flex-col gap-3 text-slate_900 w-full">
              <span className="font-medium text-lg">Nome</span>
              <input
                className="bg-slate_50 h-10 text-sm placeholder:text-slate_500 w-full px-4"
                type="text"
                name="nome"
                value={registerData.nome}
                placeholder="Seu nome completo"
                onChange={handleChange}
              />
              <span className="font-medium text-lg">CPF</span>
              <input
                className="bg-slate_50 h-10 text-sm placeholder:text-slate_500 w-full px-4"
                type="text"
                name="cpf"
                value={registerData.cpf}
                placeholder="Seu CPF"
                onChange={handleChange}
              />
              <span className="font-medium text-lg">Email</span>
              <input
                className="bg-slate_50 h-10 text-sm placeholder:text-slate_500 w-full px-4"
                type="email"
                name="email"
                value={registerData.email}
                placeholder="seu-email@mail.com"
                onChange={handleChange}
              />
              <span className="font-medium text-lg">Senha</span>
              <input
                className="bg-slate_50 h-10 text-sm placeholder:text-slate_500 w-full px-4"
                type="password"
                name="senha"
                value={registerData.senha}
                placeholder="********"
                onChange={handleChange}
              />
              <span className="font-medium text-lg">Data de Nascimento</span>
              <input
                className="bg-slate_50 h-10 text-sm placeholder:text-slate_500 w-full px-4"
                type="date"
                name="dataNascimento"
                value={registerData.dataNascimento}
                onChange={handleChange}
              />
              <Button variant="primary" action={handleSubmit} disabled={isLoading}>
                {isLoading ? 'Registrando...' : 'Registrar'}
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <span>Já tem cadastro? </span>
              <div className="text-primary flex flex-col items-center">
                <Link href="/conta/login">Faça login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </View>
  )
}
