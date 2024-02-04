import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import { Button } from '../components/atoms/button'
import { View } from '../components/organisms/view';
import { NavBar } from '../components/organisms/navbar';
import { Card } from '../components/organisms/card';
import { HeadingOne } from '../components/atoms/heading-one';
import { HeadingTwo } from '../components/atoms/heading-two';

export default function HomePage() {
  return (
    <>
      <View>
      <NavBar />
      <section className='flex items-center justify-between'>
        <HeadingOne>Dashboard</HeadingOne>
        <div className="w-64">
          <Button variant="danger" action={() => alert('relatório gerado')}>
            Gerar relatório
            <IoMdDownload size={22}/>
          </Button>
        </div>
      </section>
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
      </Card>
          
      </View>
    </>
  )
}
