import { FaTrash } from 'react-icons/fa'

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
    <div className='flex items-center bg-slate_50 rounded'>
      <div className='bg-slate_50 p-4 rounded-md w-full gap-2 flex justify-between items-center'>
        <b className="w-full">{item}</b>
        <span className="text-slate_700 text-sm font-semibold w-full">{`${atendente.substring(0, 32)}`}</span>
        <span className="text-slate_700 text-sm font-semibold w-full">{`${data.substring(0, 32)}`}</span>
        <b className=" w-full">{codigo}</b>
        <b className=" w-full">{preco}</b>
        <span className="text-slate_700 text-sm font-semibold w-full">{`${mesa.substring(0, 32)}`}</span>
        <span className="text-slate_700 text-sm font-semibold w-full">{`${observacao.substring(0, 32)}...`}</span>

      </div>
      <div className='px-2'>
      <FaTrash
        className="transition-all ease-in-out text-slate_900 hover:text-danger/90 cursor-pointer"
        size={18}
        onClick={() => {
          console.log('apagou')
        }}
      />
      </div>
    </div>
  )
}

export { OrderItem }
