import React from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { Button } from '../components/atoms/button'
import { Title } from '../components/atoms/section-title';

export default function HomePage() {
  return (
    <>
      <main className="flex w-screen h-screen bg-slate_100 flex-col">
        <Title>Dashboard</Title>
        <Button variant="danger" action={() => alert('clicked')}>
          Remover
          <FaTrashCan />
        </Button>
      </main>
    </>
  )
}
