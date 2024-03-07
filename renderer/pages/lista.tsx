import React, { useState } from 'react'
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
import { pedido } from '../mocks/data'
import { RegisterModal } from '../components/molecules/register-modal'
import { checkToken } from '../actions/check-token'

export default function Lista() {
  checkToken()
  const [openRegisterModal, setOpenRegisterModal] = useState(false)

  const handleOpenModal = () => {
    setOpenRegisterModal(true)
  }

  const handleCloseModal = () => {
    setOpenRegisterModal(false)
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
          <ButtonList />
          <div className="w-64">
            <Button variant="primary" action={handleOpenModal}>
              <FaPlusCircle />
              Registrar pedido
            </Button>
            {openRegisterModal && (
              <RegisterModal
                title="Registrar pedido"
                isOpen={openRegisterModal}
                onClose={handleCloseModal}
                apiURL="https://make-order-api-98b5f8f0c48a.herokuapp.com/api/v1.0/pedidos/create"
              />
            )}
          </div>
        </div>
        <Section>
          <Card>
            <div className="flex items-center justify-stretch font-semibold gap-2 p-4">
              <div className='w-full'><span>Item</span></div>
              <div className='w-full'><span>Atendente</span></div>
              <div className='w-full'><span>Data</span></div>
              <div className='w-full'><span>Código</span></div>
              <div className='w-full'><span>Preço</span></div>
              <div className='w-full'><span>Mesa</span></div>
              <div className='w-full'><span>Observação</span></div>
              <div className='h-7 aspect-square'></div>
            </div>

            <div className='flex flex-col gap-2'>
              {pedido.map((item) => {
                return (
                  <OrderItem
                    item={item.item}
                    atendente={item.atendente}
                    data={item.data}
                    codigo={item.codigo}
                    preco={item.preco}
                    mesa={item.mesa}
                    observacao={item.observacao}
                    key={item.codigo}
                  ></OrderItem>
                )
              })}
            </div>
          </Card>
        </Section>
      </View>
    </>
  )
}
