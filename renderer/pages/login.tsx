'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../components/atoms/button'
import { HeadingOne } from '../components/atoms/heading-one'
import { NavBar } from '../components/organisms/navbar'
import { View } from '../components/organisms/view'
import { authenticate } from '../actions/auth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <View>
        <NavBar />
        <div className="flex flex-col items-center justify-center gap-4 pt-5 "></div>
        <div className="flex justify-center items-center text-5xl text-slate_900 pt-24 z-index mb-12">
          <h1 className="font-bold">Make</h1>
          <h1>order</h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-slate_200 rounded-lg w-[32rem] px-20 py-12 max-w-xl max-h-xl flex flex-col gap-3 items-center justify-center">
            <div className='w-full'><HeadingOne>Fazer Login</HeadingOne></div>
            <div className="flex flex-col gap-3 text-slate_900 w-full">
              <span className='font-medium text-lg'>Email</span>
              <input
                className="bg-slate_50 h-10 text-sm placeholder:text-slate_500 w-full px-4"
                type="email"
                value={email}
                placeholder='seu-email@mail.com'
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className='font-medium text-lg'>Senha</span>
              <input
                className="bg-slate_50 h-10 text-sm placeholder:text-slate_500 w-full px-4"
                type="password"
                value={password}
                placeholder='********'
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="primary" action={() => authenticate({
                email,
                senha: password,
              })}>
                Entrar
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <span>Não tem cadastro? </span>
              <div className="text-primary flex flex-col items-center">
                <Link href="/register">Registre-se</Link>
                <Link href="/recuperar">Recuperar senha</Link>
              </div>
            </div>
          </div>
        </div>
      </View>
    </>
  )
}