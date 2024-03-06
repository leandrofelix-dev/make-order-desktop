import React, { useState, useEffect } from 'react'
import { IoMdDownload } from 'react-icons/io'
import { FaPlusCircle } from 'react-icons/fa'
import { Button } from '../components/atoms/button'
import { View } from '../components/organisms/view'
import { NavBar } from '../components/organisms/navbar'
import { Card } from '../components/organisms/card'
import { HeadingOne } from '../components/atoms/heading-one'
import { HeadingTwo } from '../components/atoms/heading-two'
import { MenuItem } from '../components/molecules/menu-item'
import { HeadingThree } from '../components/atoms/heading-three'
import { ProfileCard } from '../components/molecules/profile_card'
import { HeadingFour } from '../components/atoms/heading-four'
import { Section } from '../components/organisms/section'
import { Box } from '../components/organisms/box'
import { BestDishes } from '../components/molecules/best-dishes'
import { RegisterModal } from '../components/molecules/register-modal'
import { checkToken } from '../actions/check-token'
import { getPratos } from '../services/get-pratos'

export default function HomePage() {
  const [items, setItems] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    async function fetchItems() {
      try {
        const pratos = await getPratos()
        setItems(pratos)
      } catch (error) {
        console.error('Erro ao obter os pratos:', error)
      }
    }

    checkToken()
    fetchItems()
  }, [])

  const handleModalStateChange = () =>
    setIsOpenModal((prev) => !prev)

  return (
    <View>
      <NavBar />
      <div className="flex items-center justify-between">
        <HeadingOne>Dashboard</HeadingOne>
        <div className="w-64">
          <Button variant="primary" action={() => console.log('relatório gerado')}>
            Gerar relatório
            <IoMdDownload size={22} />
          </Button>
        </div>
      </div>
      <Section>
        <Card>
          <div className="flex items-center justify-between">
            <HeadingTwo>Cardápio de hoje</HeadingTwo>
            <div className="w-40">
              <Button variant="primary" action={handleModalStateChange}>
                <FaPlusCircle />
                Registrar item
              </Button>
              {isOpenModal && (
                <RegisterModal
                  title="Registrar Item"
                  isOpen={isOpenModal}
                  onClose={handleModalStateChange}
                  apiURL="https://make-order-api-98b5f8f0c48a.herokuapp.com/api/v1.0/itens/create"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-semibold flex mb-2">
              <div className="w-[calc(50%+16px)]">
                <span>Item</span>
              </div>
              <div>
                <span>Ingredientes</span>
              </div>
            </div>
            {items.map((prato) => (
              <MenuItem prato={prato.nome} ingredientes={prato.descricao} key={prato.nome}/>
            ))}
          </div>
        </Card>
        <Box>
          <Card>
            <HeadingThree>Top atendentes</HeadingThree>
            <ProfileCard
              name={'Amanda Souza'}
              role={'Creative Director'}
            ></ProfileCard>
            <ProfileCard
              name={'Leandro Félix'}
              role={'Creative Director'}
            ></ProfileCard>
            <ProfileCard
              name={'Bruno Oliveira'}
              role={'Creative Director'}
            ></ProfileCard>
          </Card>
          <Card>
            <HeadingFour>Pratos mais vendidos</HeadingFour>
            <BestDishes name={'Macarrão'} role={'123 Pratos'}></BestDishes>
            <BestDishes name={'Arroz '} role={'200 Pratos'}></BestDishes>
            <BestDishes name={'Lasanha'} role={'300 Pratos'}></BestDishes>
          </Card>
        </Box>
      </Section>
    </View>
  )
}
