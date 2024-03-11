import { RiCloseFill } from 'react-icons/ri'
import { useState } from 'react'
import { Button } from '../atoms/button'
import { HeadingOne } from '../atoms/heading-one'
import { criarPedido } from '../../services/criar-pedido'

interface Item {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  quantidade: number;
  categoria: {
    id: string;
    nome: string;
  };
}

interface Atendente {
  nome: string;
  cargo: string;
  vendas: number;
}

interface CriarPedidoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  user: any;
}

const itensMock: Item[] = [
  {
    id: '3cbc3be4-f5ba-4b2c-8826-7c2502946e05',
    nome: 'Salada de Frutas',
    preco: 9.50,
    descricao: 'Seleção de frutas frescas da estação, cortadas em cubos e servidas com uma leve calda de mel e suco de laranja.',
    quantidade: 25,
    categoria: {
      id: '2d6ba729-418e-44c8-8efb-2c6950b6dab7',
      nome: 'bebida',
    },
  },
]

const funcionariosMock: Atendente[] = [
  {
    nome: 'ADMIN',
    cargo: 'ADMINISTRADOR',
    vendas: 18,
  },
]

function CriarPedidoModal({ isOpen, onClose, title }: CriarPedidoModalProps) {
  const [pedido, setPedido] = useState<any>({
    id: '',
    data: new Date(),
    itens: [] as Item[],
    codigo: 0,
    funcionario: null as Atendente | null,
    mesa: null,
    forma_pagamento: 'PIX',
    status_pedido: 'PENDENTE',
    valor_total: 0,
  })

  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  const handleAddItem = () => {
    if (selectedItem) {
      setPedido((prevPedido: any) => ({
        ...prevPedido,
        itens: [...prevPedido.itens, selectedItem],
        valor_total: prevPedido.valor_total + selectedItem.preco * selectedItem.quantidade,
      }))
      setSelectedItem(null)
    }
  }

  const handleRegistrarPedido = async () => {
    try {
      console.log('Pedido:', pedido)
      const response = await criarPedido(pedido)

      console.log('Pedido registrado:', response)

      onClose()
    } catch (error) {
      console.error('Erro ao registrar pedido:', error)
    }
  }

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate_900 bg-opacity-60 z-50 ${isOpen ? '' : 'hidden'}`}
      onClick={handleCloseModal}
    >
      <div className="bg-slate_200 rounded-lg p-8 shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <HeadingOne>{title}</HeadingOne>
          <RiCloseFill
            className="text-2xl text-slate_900 hover:text-danger cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <div className="w-full">
            <label className="block text-slate_700 font-semibold mb-2">Selecionar Item</label>
            <div className='flex justify-between'>
            <select
              className="bg-slate_100 border border-slate_300 rounded-md p-2 w-full focus:outline-none focus:border-primary"
              value={selectedItem ? selectedItem.nome : ''}
              onChange={(e) => {
                const selected = itensMock.find((item) => item.nome === e.target.value)
                setSelectedItem(selected || null)
              }}
            >
              <option value="">Selecione um item</option>
              {itensMock.map((item) => (
                <option key={item.id} value={item.nome}>{item.nome}</option>
              ))}
            </select>
            <div className="ml-4">
            <Button
              variant="primary"
              action={handleAddItem}
              disabled={!selectedItem}>
              Adicionar
            </Button>
          </div>
            </div>
          </div>
          
        </div>
        <div className="mb-4">
          <label className="block text-slate_700 font-semibold mb-2">Itens Selecionados</label>
          <ul className="list-disc list-inside">
            {pedido.itens.map((item: Item) => (
              <li key={item.id}>{item.nome}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <label className="block text-slate_700 font-semibold mb-2">Selecionar Atendente</label>
          <select
            className="bg-slate_100 border border-slate_300 rounded-md p-2 w-full focus:outline-none focus:border-primary"
            value={pedido.funcionario ? pedido.funcionario.nome : ''}
            onChange={(e) => {
              const selected = funcionariosMock.find((atendente) => atendente.nome === e.target.value)
              setPedido((prevPedido: any) => ({
                ...prevPedido,
                funcionario: selected || null,
              }))
            }}
          >
            <option value="">Selecione um atendente</option>
            {funcionariosMock.map((atendente) => (
              <option key={atendente.nome} value={atendente.nome}>{atendente.nome}</option>
            ))}
          </select>
        </div>
        <Button
          variant="primary"
          action={handleRegistrarPedido}
          disabled={pedido.itens.length === 0 || !pedido.funcionario}>
          Registrar Pedido
        </Button>
      </div>
    </div>
  )
}

export { CriarPedidoModal }
