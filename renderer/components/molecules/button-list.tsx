import { ButtonItem } from '../atoms/button-item'

function ButtonList () {
  return (
    <div className="flex items-center justify-between gap-2" >
      <ButtonItem label="Aguardando confirmação" href="/listas" />
      <ButtonItem label="Em preparo" href="/lista" />
      <ButtonItem label="Pronto" href="/lista" />
      <ButtonItem label="Concluído" href="/lista" />
    </div>
  )
}

export { ButtonList }
