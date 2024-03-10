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

export default function Lista() {
  checkToken()
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [pedidos, setPedidos] = useState([])

  useEffect(() => {
    async function fetchPratos() {
      try {
        const pratos = await getPedidos()
        setPedidos(pratos)
      } catch (error) {
        console.error('Erro ao obter os pratos:', error)
      }
    }

    checkToken()
    fetchPratos()
  }, [])

  const handleModalStateChange = () => setIsOpenModal((prev) => !prev)

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
          <ButtonList />
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
                apiURL="https://make-order-api-98b5f8f0c48a.herokuapp.com/api/v1.0/pedidos/create"
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
              {pedidos.map((element) => {
                return (
                  <OrderItem
                    item={element.itens[0].nome}
                    atendente={'nome do(a) atendente'}
                    data={'data aqui'}
                    codigo={'codigo aqui'}
                    preco={`R$ ${element.itens[0].preco}`}
                    mesa={'mesa aqui'}
                    observacao={element.itens[0].descricao}
                    key={element.id}
                  />
                )
              })}
            </div>
          </Card>
        </Section>
      </View>
    </>
  )
}
