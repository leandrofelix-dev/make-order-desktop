import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import { Button } from '../components/atoms/button'
import { View } from '../components/organisms/view';
import { NavBar } from '../components/organisms/navbar';
import { Card } from '../components/organisms/card';
import { HeadingOne } from '../components/atoms/heading-one';
import { HeadingTwo } from '../components/atoms/heading-two';
import { MenuItem } from '../components/molecules/menu-item';
import { menu } from '../mocks/data';
import { HeadingThree } from '../components/atoms/heading-three';

export default function HomePage() {
  return (
    <>
      <View>
      <NavBar />
      <section className='flex items-center justify-between'>
        <HeadingOne>Dashboard</HeadingOne>
        <div className="w-64">
          <Button variant="primary" action={() => alert('relatório gerado')}>
            Gerar relatório
            <IoMdDownload size={22}/>
          </Button>
        </div>
      </section>
      <section className='flex gap-4 items-start justify-between'>
      <Card>
        <div className='flex items-center justify-between'>
          <HeadingTwo>Cardápio de hoje</HeadingTwo>
          <div className="w-40">
            <Button variant="primary" action={() => alert('item registrado')}>
              <FaPlusCircle />
              Registrar item
            </Button>
          </div>
        </div>
        <section className='my-4'>
          <div className='font-semibold flex mb-2'>
            <div className='w-[calc(50%+16px)]'>
              <span>Item</span>
            </div>
            <div>
              <span>Ingredientes</span>
            </div>
          </div>
          {
            menu.map((prato) => (
              <MenuItem prato={prato.nome} ingredientes={prato.descricao} />
            ))
          }
        
        </section>
      </Card>
      <Card>
        <HeadingThree>Top atendentes</HeadingThree>
      </Card>
      </section>
          
      </View>
    </>
  )
}
