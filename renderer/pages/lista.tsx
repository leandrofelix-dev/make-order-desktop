import React, { useEffect, useState } from 'react'
import { Button } from '../components/atoms/button'
import { View } from '../components/organisms/view'
import { NavBar } from '../components/organisms/navbar'
import { HeadingOne } from '../components/atoms/heading-one'
import { SearchBar } from '../components/atoms/search-bar'
import { Section } from '../components/organisms/section'
import { Card } from '../components/organisms/card'
import { ButtonList } from '../components/molecules/button-list'
import { FaPlusCircle } from 'react-icons/fa'
import { OrderItem } from '../components/molecules/order-item '
import { RegisterModal } from '../components/molecules/register-modal'
import { checkToken } from '../actions/check-token'
import { getPedidos } from '../services/get-pedidos'
import { deletePedido } from '../services/delete-pedidos'
import { atualizaStatusPedido } from '../services/atualizar-status-pedido'

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

  const handleModalStateChange = () => setIsOpenModal((prev) => !prev)

  const handleButtonListClick = (index) => {
    setActiveButtonIndex(index)
  }

  const deletePedidos = async (id) => {
    try {
      await deletePedido(id)
      const updatedPedidos = pedidos.filter(pedido => pedido.id !== id)
      setPedidos(updatedPedidos)
    } catch (error) {
      console.error('Erro ao excluir o pedido:', error)
    }
  }

  const updatePedidoStatus = async (id, pedido) => {
    try {
      await atualizaStatusPedido(id, pedido)
    } catch (error) {
      console.error('Erro ao atualizar o status do pedido:', error)
    }
  }

  return (
    <>
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
              <div className="w-full">
                <span>Item</span>
              </div>
              <div className="w-full">
                <span>Atendente</span>
              </div>
              <div className="w-full">
                <span>Data</span>
              </div>
              <div className="w-full">
                <span>Código</span>
              </div>
              <div className="w-full">
                <span>Preço</span>
              </div>
              <div className="w-full">
                <span>Mesa</span>
              </div>
              <div className="w-full">
                <span>Observação</span>
              </div>
              <div className="h-7 w-[700px]"></div>
            </div>

            <div className="flex flex-col gap-2">
              {pedidos.map((element) => (
                <OrderItem
                  item={element.itens[0].nome}
                  atendente={element.atendente}
                  data={element.data}
                  codigo={element.codigo}
                  preco={`R$ ${element.itens[0].preco}`}
                  mesa={element.mesa}
                  observacao={element.itens[0].descricao}
                  id={element.id}
                  deletePedidos={deletePedidos}
                  atualizaStatusPedido={updatePedidoStatus}
                  key={element.id}
                />
              ))}
            </div>
          </Card>
        </Section>
      </View>
    </>
  )
}
