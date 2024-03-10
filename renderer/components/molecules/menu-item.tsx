/* eslint-disable no-unused-vars */
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { deletePrato } from '../../services/delete-prato'

interface MenuItemProps {
  prato: string;
  ingredientes: string;
  id: string;
  onItemRemoval: (id: string) => void;
}

function MenuItem({ prato, ingredientes, id, onItemRemoval }: MenuItemProps) {

  async function handleRemoveItem() {
    try {
      await deletePrato(id)
      console.log('Item removido com sucesso!')
      onItemRemoval(id)
    } catch (error) {
      console.error('Erro ao remover prato:', error)
    }
  }

  return (
    <div className="bg-slate_50 p-4 flex items-center justify-between rounded-md my-2">
      <b className="w-[calc(50%+16px)]">{prato}</b>
      <span className="text-slate_700 font-semibold">{`${ingredientes.substring(0, 40)}...`}</span>
      <FaTrash
        className="transition-all ease-in-out text-slate_900 hover:text-danger/90 cursor-pointer"
        onClick={handleRemoveItem}
      />
    </div>
  )
}

export { MenuItem }
