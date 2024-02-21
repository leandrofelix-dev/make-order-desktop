import Link from "next/link";
import { Button } from "../components/atoms/button";
import { HeadingOne } from "../components/atoms/heading-one";
import { NavBar } from "../components/organisms/navbar";
import { View } from "../components/organisms/view";

export default function Login() {
  return (
    <>
      <View>
        <NavBar />
        <div className="flex flex-col items-center justify-center gap-4 pt-5 "></div>
          <div className="flex justify-center items-center text-5xl text-slate_900 pt-24 z-index">
            <h1 className="font-bold">Make</h1>
            <h1>order</h1>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-slate_200 px-6 py-4 rounded-lg w-full h-full max-w-[525px] max-h-[471px] flex flex-col shadow-md gap-3">
              <HeadingOne>Fazer Login</HeadingOne>
              <div className="flex flex-col gap-3 text-slate_900 ml-8 mr-8">
                <span>Email</span>
                <input className="bg-slate_50 h-8 text-sm placeholder:text-slate_500 w-full" type="text" />
                <span>Senha</span>
                <input className="bg-slate_50 h-8 text-sm placeholder:text-slate_500 w-full" type="text" />
                <Button
                  variant="primary"
                  action={() => alert("Usuário logado")}>
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