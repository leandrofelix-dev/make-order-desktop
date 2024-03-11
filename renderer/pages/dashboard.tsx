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
import { ProfileCard } from '../components/molecules/profile-card'
import { HeadingFour } from '../components/atoms/heading-four'
import { Section } from '../components/organisms/section'
import { Box } from '../components/organisms/box'
import { BestDishes } from '../components/molecules/best-dishes'
import { RegisterModal } from '../components/molecules/register-modal'
import { checkToken } from '../actions/check-token'
import { getPratos } from '../services/get-pratos'
import { getTopPratos } from '../services/get-top-pratos'
import { getTopAtendentes } from '../services/get-top-atendentes'

interface Prato {
  id: string;
  nome: string;
  descricao: string;
}

export default function HomePage() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [items, setItems] = useState<Prato[]>([])
  const [topPratos, setTopPratos] = useState([])
  const [topAtendentes, setTopAtendentes] = useState([])

  useEffect(() => {
    checkToken()
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      const pratos: Prato[] = await getPratos()
      const topPratos = await getTopPratos()
      const topAtendentes = await getTopAtendentes()

      setItems(pratos)
      setTopPratos(topPratos)
      setTopAtendentes(topAtendentes)
    } catch (error) {
      console.error('Erro ao obter dados:', error)
    }
  }

  const handleModalStateChange = () => {
    setIsOpenModal((prev) => !prev)
    fetchItems()
  }

  const handleItemRemoval = (itemIdToRemove: string) =>
    setItems(items.filter((item) => item.id !== itemIdToRemove))

  return (
    <View>
      <NavBar />
      <div className="flex items-center justify-between">
        <HeadingOne>Dashboard</HeadingOne>
        <div className="w-64">
          <Button
            variant="primary"
            action={() => console.log('relatório gerado')}
          >
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
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-semibold flex my-4">
              <div className="w-[calc(50%+16px)]">
                <span>Item</span>
              </div>
              <div>
                <span>Ingredientes</span>
              </div>
            </div>
            {items.map((prato) => (
              <MenuItem
                prato={prato.nome}
                ingredientes={prato.descricao}
                key={prato.id}
                id={prato.id}
                onItemRemoval={handleItemRemoval}
              />
            ))}
          </div>
        </Card>
        <Box>
          <Card>
            <HeadingThree>Top atendentes</HeadingThree>
            {topAtendentes.map((atendente) => (
              <ProfileCard
                name={atendente.nome}
                role={atendente.cargo}
                key={atendente.nome}
              />
            
            ))}
          </Card>
          <Card>
            <HeadingFour>Pratos mais vendidos</HeadingFour>
            {topPratos.map((prato) => (
              <BestDishes
                name={prato.nome}
                qtd={`${prato.quantidadeVendas} pratos`}
                key={prato.nome}
              />
            ))}
          </Card>
        </Box>
      </Section>
    </View>
  )
}
