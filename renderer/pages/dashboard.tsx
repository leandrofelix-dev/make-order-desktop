import React from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { Button } from '../components/atoms/button'
import { Title } from '../components/atoms/section-title';
import { View } from '../components/organisms/view';
import { NavBar } from '../components/organisms/nav';

export default function HomePage() {
  return (
    <>
      <View>
      <NavBar />
        {/* <Title>Dashboard</Title>
          <Button variant="danger" action={() => alert('clicked')}>
            Remover
            <FaTrashCan />
          </Button> */}
      </View>
    </>
  )
}
