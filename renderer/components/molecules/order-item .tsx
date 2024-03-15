/* eslint-disable no-unused-vars */
import React from 'react'
import { MdCancel } from 'react-icons/md'
import { HiMiniArrowRightCircle } from 'react-icons/hi2'

interface OrderItemProps {
  item: string;
  atendente: string;
  data: string;
  codigo: string;
  preco: string;
  mesa: string;
  observacao: string;
  id: string;
  deletePedidos: (id: string) => void;
  atualizaStatusPedido: (id: string, pedido: any) => void;
}

function OrderItem({
  item,
  atendente,
  data,
  codigo,
  preco,
  mesa,
  observacao,
  id,
  deletePedidos,
  atualizaStatusPedido
}: OrderItemProps) {
  return (
    <div className="flex items-center rounded gap-2">
      <div className="bg-slate_50 p-4 rounded-md w-full gap-2 flex justify-between items-center">
        <b className="w-full">{item}</b>
        <span className="text-slate_700 text-sm font-semibold w-full">{atendente}</span>
        <span className="text-slate_700 text-sm font-semibold w-full">{data}</span>
        <b className=" w-full">{codigo}</b>
        <b className=" w-full">{preco}</b>
        <div className='w-full px-4'><span className="text-slate_700 border-slate_500 text-sm font-bold w-full rounded-full p-1 border-2 flex items-center justify-center">{mesa}</span></div>
        <span className="text-slate_700 text-sm font-semibold w-full">{observacao ? observacao.substring(0, 32) : ''}...</span>
      </div>
      <div className="px-2 bg-danger hover:bg-danger_hover h-[72px] flex items-center rounded text-slate_50 cursor-pointer">
        <MdCancel
          size={24}
          onClick={() => deletePedidos(id)}
        />
      </div>
      <div className="px-2 bg-primary hover:bg-primary_hover h-[72px] flex items-center rounded text-slate_50 cursor-pointer">
        <HiMiniArrowRightCircle
          size={24}
          onClick={() => atualizaStatusPedido(id, {
            item,
            atendente,
            data,
            codigo,
            preco,
            mesa,
            observacao,
            id
          })}
        />
      </div>
    </div>
  )
}

export { OrderItem }
