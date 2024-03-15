import React, { useState, useEffect } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { checkToken } from '../actions/check-token'
import { HeadingOne } from '../components/atoms/heading-one'
import { KBCard } from '../components/organisms/kb-card'
import { NavBar } from '../components/organisms/navbar'
import { Section } from '../components/organisms/section'
import { View } from '../components/organisms/view'
import { Button } from '../components/atoms/button'
import { CriarPedidoModal } from '../components/molecules/criar-pedidos-modal'
import { getFuncionarios } from '../services/get-funcionarios'
import { getPedidos } from '../services/get-pedidos'
import { getPratos } from '../services/get-pratos'
import { deletePedido } from '../services/delete-pedidos'

// Importe a função atualizaStatusPedido
import { atualizaStatusPedido } from '../services/atualizar-status-pedido'

export default function Quadro() {
  useEffect(() => {
    checkToken()
  }, [])

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [orders, setOrders] = useState({
    PENDENTE: [],
    CONFIRMADO: [],
    CONCLUIDO: [],
  })
  const [pratos, setPratos] = useState([])
  const [funcionarios, setFuncionarios] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pratosData = await getPratos()
        const funcionariosData = await getFuncionarios()
        const pedidosData = await getPedidos()

        setPratos(pratosData)
        setFuncionarios(funcionariosData)

        const formattedOrders = {
          PENDENTE: [],
          CONFIRMADO: [],
          CONCLUIDO: [],
        }

        pedidosData.forEach((pedido) => {
          formattedOrders[pedido.status_pedido].push(pedido)
        })

        setOrders(formattedOrders)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    fetchData()
  }, [])

  const handleModalStateChange = () => setIsOpenModal(!isOpenModal)

  const removePedido = async (id) => {
    try {
      await deletePedido(id)
      setOrders((prevOrders) => {
        const updatedOrders = { ...prevOrders }
        Object.keys(updatedOrders).forEach((key) => {
          updatedOrders[key] = updatedOrders[key].filter((pedido) => pedido.id !== id)
        })
        return updatedOrders
      })
    } catch (error) {
      console.error('Erro ao excluir o pedido:', error)
    }
  }

  // Função para atualizar o status do pedido quando arrastado e solto
  const onDragEnd = async (result) => {
    if (!result.destination) return
    const { source, destination, draggableId } = result
    if (source.droppableId === destination.droppableId) return

    const sourceColumn = orders[source.droppableId]
    const destColumn = orders[destination.droppableId]
    const movedItem = sourceColumn.find((pedido) => pedido.id === draggableId)

    if (!movedItem) return

    try {
      await atualizaStatusPedido(movedItem.id)
      setOrders((prevOrders) => {
        const updatedOrders = { ...prevOrders }
        updatedOrders[source.droppableId] = sourceColumn.filter((pedido) => pedido.id !== draggableId)
        updatedOrders[destination.droppableId] = [...destColumn, movedItem]
        return updatedOrders
      })
    } catch (error) {
      console.error('Erro ao atualizar o status do pedido:', error)
    }
  }

  const truncateDescription = (description, maxLength) => {
    return description.length > maxLength
      ? `${description.slice(0, maxLength)}...`
      : description
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <View>
        <NavBar />
        <div className="flex items-center justify-between">
          <HeadingOne>Quadro de pedidos</HeadingOne>
        </div>
        <Section>
          <div className="bg-slate_200 flex p-6 rounded-xl items-start justify-between">
            {Object.keys(orders).map((key, index) => (
              <div key={index} className=" min-w-[320px]">
                <div className="flex justify-between items-center px-4">
                  <h3 className="font-semibold text-lg text-slate_900">
                    {key}
                  </h3>
                  <span className="text-danger/40 bg-danger/20 rounded-full h-6 w-6 items-center flex justify-center font-bold text-[12px]">
                    {orders[key].length}
                  </span>
                </div>
                <Droppable droppableId={key} key={key}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={
                        snapshot.isDraggingOver
                          ? 'bg-gray-200 p-2 rounded-lg'
                          : 'p-2 rounded-lg'
                      }
                    >
                      {orders[key]?.map((pedido, index) => (
                        <Draggable
                          key={pedido.id}
                          draggableId={pedido.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`w-full ${
                                snapshot.isDragging ? 'opacity-50' : ''
                              }`}
                            >
                              <KBCard
                                title={pedido.itens[0]?.nome}
                                descricao={truncateDescription(
                                  pedido.itens[0]?.descricao,
                                  20
                                )}
                                mesa={`Mesa ${pedido.mesa.numero.toString().padStart(2, '0')}`}
                                id={`#P${pedido.codigo.toString().padStart(3, '0')}`}
                                onDelete={() => removePedido(pedido.id)}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </Section>
        <div className="w-[308px] pl-2">
          <Button variant="primary" action={handleModalStateChange}>
            <FaPlusCircle />
            Adicionar pedido
          </Button>
          {isOpenModal && (
            <CriarPedidoModal
              title="Registrar pedido"
              isOpen={isOpenModal}
              onClose={handleModalStateChange}
              user={undefined}
              atendentes={funcionarios}
              pratos={pratos}
            />
          )}
        </div>
      </View>
    </DragDropContext>
  )
}
