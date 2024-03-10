import { RiCloseFill } from 'react-icons/ri'
import { useState } from 'react'
import { Button } from '../atoms/button'
import { HeadingOne } from '../atoms/heading-one'
import { criarPrato } from '../../services/criar-prato'

interface Item {
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
}

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

function RegisterModal({ isOpen, onClose, title }: RegisterModalProps) {
  const [item, setItem] = useState<Item>({
    nome: '',
    preco: 0,
    quantidade: 0,
    descricao: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }))
  }

  async function handleAddItem() {
    try {
      const response = await criarPrato(item)
      console.log(item)
      console.log('Item registrado com sucesso!', response.data)
      onClose()
    } catch (error) {
      console.error('Erro ao registrar item:', error)
    }
  }

  return (
    <div className="bg-slate_900/60 w-screen h-screen p-2 fixed z-[1] left-0 top-0 flex items-center justify-center">
      <div className={`modal ${isOpen ? 'open' : ''} absolute`}>
        <div className="flex items-center justify-center">
          <div className="bg-slate_200 rounded-xl flex flex-col h-full w-[720px] max-h-[500px] outline-none border-none p-8 gap-6">
            <div className="flex items-center justify-between">
              <HeadingOne>{title}</HeadingOne>
              <RiCloseFill
                className="text-2xl transition-all ease-in-out text-slate_900 hover:text-danger/90 cursor-pointer"
                onClick={onClose}
              />
            </div>

            <div>
              <label className="font-semibold flex mb-2">Item</label>
              <input
                className="bg-slate_50 border-2 border-slate_200 h-8  text-sm placeholder:text-slate_500 w-full"
                type="text"
                name="nome"
                value={item.nome}
                onChange={handleInputChange}
              />

              <div className="flex justify-between">
                <div>
                  <label className="font-semibold flex mb-2">Preço</label>
                  <input
                    className="bg-slate_50 border-2 border-slate_200 h-8  text-sm placeholder:text-slate_500"
                    type="number"
                    name="preco"
                    value={item.preco}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="font-semibold flex mb-2">Quantidade</label>
                  <input
                    className="bg-slate_50 border-2 border-slate_200 h-8  text-sm placeholder:text-slate_500"
                    type="number"
                    name="quantidade"
                    value={item.quantidade}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <label className="font-semibold flex mb-2">Observações</label>
              <input
                className="bg-slate_50 border-2 border-slate_200 text-sm placeholder:text-slate_500 w-full h-10"
                type="text"
                name="descricao"
                value={item.descricao}
                onChange={handleInputChange}
              />

              <Button variant="primary" action={handleAddItem}>
                Registrar
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Elemento externo de fechamento do modal */}
      <div className="flex-1 w-screen h-screen" onClick={onClose}></div>
    </div>
  )
}

export { RegisterModal }
