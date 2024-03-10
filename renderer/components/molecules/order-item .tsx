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
}

function OrderItem({
  item,
  atendente,
  data,
  codigo,
  preco,
  mesa,
  observacao,
}: OrderItemProps) {
  return (
    <div className="flex items-center rounded gap-2">
      <div className="bg-slate_50 p-4 rounded-md w-full gap-2 flex justify-between items-center">
        <b className="w-full">{item}</b>
        <span className="text-slate_700 text-sm font-semibold w-full">{`${atendente.substring(0, 32)}`}</span>
        <span className="text-slate_700 text-sm font-semibold w-full">{`${data.substring(0, 32)}`}</span>
        <b className=" w-full">{codigo}</b>
        <b className=" w-full">{preco}</b>
        <span className="text-slate_700 text-sm font-semibold w-full">{`${mesa.substring(0, 32)}`}</span>
        <span className="text-slate_700 text-sm font-semibold w-full">{`${observacao.substring(0, 32)}...`}</span>
      </div>
      <div className="px-2 bg-danger hover:bg-danger_hover h-[72px] flex items-center rounded text-slate_50 cursor-pointer">
        <MdCancel
          size={24}
          onClick={() => {
            console.log('apagou')
          }}
        />
      </div>
      <div className="px-2 bg-primary hover:bg-primary_hover h-[72px] flex items-center rounded text-slate_50 cursor-pointer">
        <HiMiniArrowRightCircle
          size={24}
          onClick={() => {
            console.log('passou')
          }}
        />
      </div>
    </div>
  )
}

export { OrderItem }
