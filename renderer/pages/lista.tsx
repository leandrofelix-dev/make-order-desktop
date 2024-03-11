// arquivo: pages/lista.tsx
import React, { useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { checkToken } from '../actions/check-token'
import { deletePedido } from '../services/delete-pedidos'
import { getPedidos } from '../services/get-pedidos'
import { atualizaStatusPedido } from '../services/atualizar-status-pedido'
import { Button } from '../components/atoms/button'
import { ButtonList } from '../components/molecules/button-list'
import { Card } from '../components/organisms/card'
import { NavBar } from '../components/organisms/navbar'
import { RegisterModal } from '../components/molecules/register-modal'
import { Section } from '../components/organisms/section'
import { HeadingOne } from '../components/atoms/heading-one'
import { SearchBar } from '../components/atoms/search-bar'
import { View } from '../components/organisms/view'
import { OrderItem } from '../components/molecules/order-item '

export default function Lista() {
  checkToken()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)
  const [pedidos, setPedidos] = useState([])

  useEffect(() => {
    async function fetchPedidos() {
      try {
        const data = await getPedidos()
        setPedidos(data)
      } catch (error) {
        console.error('Erro ao obter os pedidos:', error)
      }
    }

    fetchPedidos()
  }, [])

  const handleModalStateChange = () => setIsOpenModal(prev => !prev)

  const handleButtonListClick = index => {
    setActiveButtonIndex(index)
  }

  const deletePedidoAndUpdateState = async id => {
    try {
      await deletePedido(id)
      setPedidos(pedidos)
    } catch (error) {
      console.error('Erro ao excluir o pedido:', error)
    }
  }

  const updatePedidoStatus = async id => {
    try {
      await atualizaStatusPedido(id)
      const updatedPedidos = [...pedidos]
      const pedidoIndex = updatedPedidos.findIndex(pedido => pedido.id === id)
      updatedPedidos[pedidoIndex] = await getPedidos()
      setPedidos(updatedPedidos)
    } catch (error) {
      console.error('Erro ao atualizar o status do pedido:', error)
    }
  }

  const filterPedidosByStatus = (pedidos, status) => {
    switch (status) {
      case 0:
        return pedidos.filter(pedido => pedido.status_pedido === 'PENDENTE')
      case 1:
        return pedidos.filter(pedido => pedido.status_pedido === 'CONFIRMADO')
      case 2:
        return pedidos.filter(pedido => pedido.status_pedido === 'CONCLUIDO')
      default:
        return pedidos
    }
  }

  const filteredPedidos = filterPedidosByStatus(pedidos, activeButtonIndex)

  return (
    <View>
      <NavBar />
      <div className="flex items-center justify-between">
        <HeadingOne>Lista de pedidos</HeadingOne>
        <div className="w-64">
          <SearchBar />
        </div>
      </div>
      <div className="flex items-center justify-between my-8">
        <ButtonList active={activeButtonIndex} onItemClick={handleButtonListClick} />
        <div className="w-64">
          <Button variant="primary" action={handleModalStateChange}>
            <FaPlusCircle />
            Registrar pedido
          </Button>
          {isOpenModal && (
            <RegisterModal
              title="Registrar pedido"
              isOpen={isOpenModal}
              onClose={handleModalStateChange}
            />
          )}
        </div>
      </div>
      <Section>
        <Card>
          <div className="flex items-center justify-stretch font-semibold gap-2 p-4">
            <div className="w-full">Item</div>
            <div className="w-full">Atendente</div>
            <div className="w-full">Data</div>
            <div className="w-full">Código</div>
            <div className="w-full">Preço</div>
            <div className="w-full">Mesa</div>
            <div className="w-full">Observação</div>
            <div className="h-7 w-[700px]"></div>
          </div>

          <div className="flex flex-col gap-2">
            {filteredPedidos.map(element => (
              <OrderItem
                item={element.itens[0].nome}
                atendente={element.funcionario}
                data={element.data}
                codigo={element.codigo}
                preco={`R$ ${parseFloat(element.itens[0].preco).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}
                mesa={element.mesa}
                observacao={element.itens[0].descricao}
                id={element.id}
                deletePedidos={deletePedidoAndUpdateState}
                atualizaStatusPedido={updatePedidoStatus}
                key={element.id}
              />
            ))}
          </div>
        </Card>
      </Section>
    </View>
  )
}
