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

  const handleAddItem = async () => {
    if (!item.nome || !item.descricao || item.preco <= 0 || item.quantidade <= 0) {
      console.error('Por favor, preencha todos os campos corretamente.')
      return
    }
    
    try {
      const response = await criarPrato(item)
      console.log('Item registrado com sucesso:', response.data)
      onClose()
    } catch (error) {
      console.error('Erro ao registrar item:', error)
    }
  }

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate_900 bg-opacity-60 z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-slate_200 rounded-lg p-8 shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <HeadingOne>{title}</HeadingOne>
          <RiCloseFill
            className="text-2xl text-slate_900 hover:text-danger cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate_700 font-semibold mb-2">Item</label>
          <input
            className="bg-slate_100 border border-slate_300 rounded-md p-2 w-full focus:outline-none focus:border-primary"
            type="text"
            name="nome"
            value={item.nome}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4 flex justify-between">
          <div className="w-1/2 mr-2">
            <label className="block text-slate_700 font-semibold mb-2">Preço</label>
            <input
              className="bg-slate_100 border border-slate_300 rounded-md p-2 w-full focus:outline-none focus:border-primary"
              type="number"
              name="preco"
              value={item.preco}
              onChange={handleInputChange}
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block text-slate_700 font-semibold mb-2">Quantidade</label>
            <input
              className="bg-slate_100 border border-slate_300 rounded-md p-2 w-full focus:outline-none focus:border-primary"
              type="number"
              name="quantidade"
              value={item.quantidade}
              onChange={handleInputChange}
              min="1"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-slate_700 font-semibold mb-2">Ingredientes</label>
          <input
            className="bg-slate_100 border border-slate_300 rounded-md p-2 w-full focus:outline-none focus:border-primary"
            type="text"
            name="descricao"
            value={item.descricao}
            onChange={handleInputChange}
          />
        </div>
        <Button
          variant="primary"
          action={handleAddItem}>
          Registrar
        </Button>
      </div>
    </div>
  )
}

export { RegisterModal }
