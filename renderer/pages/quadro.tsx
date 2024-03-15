import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { checkToken } from '../actions/check-token'
import { HeadingOne } from '../components/atoms/heading-one'
import { SearchBar } from '../components/atoms/search-bar'
import { KBCard } from '../components/organisms/kb-card'
import { NavBar } from '../components/organisms/navbar'
import { Section } from '../components/organisms/section'
import { View } from '../components/organisms/view'
import { Button } from '../components/atoms/button'
import { FaPlusCircle } from 'react-icons/fa'

export default function Quadro() {
  checkToken()

  const [orders, setOrders] = useState({
    'Aguardando_confirmação': [
      {
        id: 'P0120',
        title: 'Tapioca recheada',
        descricao: 'Recheio de carne',
        mesa: 'MESA 01',
      },
      {
        id: 'P0121',
        title: 'Tapioca recheada',
        descricao: 'Recheio de carne',
        mesa: 'MESA 01',
      },
      {
        id: 'P0122',
        title: 'Tapioca recheada',
        descricao: 'Recheio de carne',
        mesa: 'MESA 01',
      },
    ],
    'Em_preparo': [
      {
        id: 'P0123',
        title: 'Tapioca recheada',
        descricao: 'Recheio de carne',
        mesa: 'MESA 01',
      },
      {
        id: 'P0124',
        title: 'Tapioca recheada',
        descricao: 'Recheio de carne',
        mesa: 'MESA 01',
      },
    ],
    'Concluído': [
      {
        id: 'P0125',
        title: 'Tapioca recheada',
        descricao: 'Recheio de carne',
        mesa: 'MESA 01',
      },
      {
        id: 'P0126',
        title: 'Tapioca recheada',
        descricao: 'Recheio de carne',
        mesa: 'MESA 01',
      },
    ],
  })

  const onDragEnd = (result) => {
    if (!result.destination) return
    const { source, destination } = result

    console.log(`Card movido de ${source.droppableId} para ${destination.droppableId}`)

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = orders[source.droppableId]
      const destColumn = orders[destination.droppableId]
      const sourceIndex = source.index
      const destIndex = destination.index

      const [removed] = sourceColumn.splice(sourceIndex, 1)
      destColumn.splice(destIndex, 0, removed)

      setOrders({
        ...orders,
        [source.droppableId]: sourceColumn,
        [destination.droppableId]: destColumn,
      })
    } else {
      const column = orders[source.droppableId]
      const copiedItems = [...column]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)

      setOrders({ ...orders, [source.droppableId]: copiedItems })
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <View>
        <NavBar />
        <div className="flex items-center justify-between">
          <HeadingOne>Quadro de pedidos</HeadingOne>
          <div className="w-64">
            <SearchBar />
          </div>
        </div>
        <Section>
          <div className="bg-slate_200 flex p-6 rounded-xl items-start justify-between">
            {Object.keys(orders).map(
              (key, index) =>
                ['Aguardando_confirmação', 'Em_preparo', 'Concluído'].includes(key) && (
                  <div key={index} className=" min-w-[320px]">
                    <div className="flex justify-between items-center px-4">
                      <h3 className="font-semibold text-lg text-slate_900">
                        {key.replace(/_/g, ' ')}
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
                          {orders[key].map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`w-full ${snapshot.isDragging ? 'opacity-50' : ''}`}
                                >
                                  <KBCard
                                    title={item.title}
                                    descricao={item.descricao}
                                    mesa={item.mesa}
                                    id={item.id}
                                  />
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                    {index === 0 && (
                      <div className='w-[308px] pl-2'>
                        <Button variant={'primary'}>
                        <FaPlusCircle />
                        Adicionar pedido
                      </Button>
                      </div>
                    )}
                  </div>
                )
            )}
          </div>
        </Section>
      </View>
    </DragDropContext>
  )
}
