import React from 'react'
import { FaTrashCan, FaCirclePlus } from "react-icons/fa6";
import { Button } from '../components/atoms/button'

export default function HomePage() {
  return (
    <>
      <main className="flex w-screen h-screen bg-slate_100">
        <Button variant="danger" action={() => console.log('clicked')}>
          Remover
          <FaTrashCan />
        </Button>

        <Button variant="primary" action={() => console.log('clicked')}>
          Adicionar
          <FaCirclePlus />
        </Button>
      </main>
    </>
  )
}
