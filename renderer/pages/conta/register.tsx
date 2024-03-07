'use client'
import Link from 'next/link'
import { Button } from '../../components/atoms/button'
import { HeadingOne } from '../../components/atoms/heading-one'
import { View } from '../../components/organisms/view'


export default function Register () {
  return (
    <>
      <View>
        <div className="flex flex-col items-center justify-center gap-4 pt-5 ">
          <div className="flex justify-center items-center text-5xl text-slate_900">
            <h1 className="font-bold">Make</h1>
            <h1>order</h1>
          </div>
          <div className="bg-slate_200 px-6 py-4 rounded-lg w-full h-full max-w-[525px] max-h-[671px] flex flex-col shadow-md gap-3">

            <HeadingOne>Registrar-se</HeadingOne>

            <div className="flex flex-col gap-3 text-slate_900">
              <span>Email</span>
              <input className="bg-slate_50 h-8 text-sm placeholder:text-slate_500 w-full" type="text" />

              <span>Nome</span>
              <input className="bg-slate_50 h-8 text-sm placeholder:text-slate_500 w-full" type="text" />

              <span>Senha</span>
              <input className="bg-slate_50 h-8 text-sm placeholder:text-slate_500 w-full" type="text" />

              <span>Confirmação da senha</span>
              <input className="bg-slate_50 h-8 text-sm placeholder:text-slate_500 w-full" type="text" />

              <span>Cargo</span>
              <input className="bg-slate_50 h-8 text-sm placeholder:text-slate_500 w-full" type="text" />

              <Button
                variant="primary"
                action={() => console.log('Usuário logado')}
              >
                Registrar-se
              </Button>

            </div>
          </div>

          <div className="flex justify-between gap-1">
            <span>Já tem cadastro?</span>
            <div className="text-primary">
              <Link href="/conta/login">Fazer login</Link>
            </div>
          </div>

        </div>
      </View>
    </>
  )
}
