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
    <div className="bg-slate_50 p-4 flex items-center justify-between rounded-md my-2 gap-12">
      <b className="">{item}</b>
      <span className="text-slate_700 text-sm font-semibold">{`${atendente.substring(0, 40)}`}</span>
      <span className="text-slate_700 text-sm font-semibold">{`${data.substring(0, 40)}`}</span>
      <b className="">{codigo}</b>
      <b className="">{preco}</b>
      <span className="text-slate_700 text-sm font-semibold">{`${mesa.substring(0, 40)}`}</span>
      <span className="text-slate_700 text-sm font-semibold">{`${observacao.substring(0, 40)}...`}</span>

      <FaTrash
        className="transition-all ease-in-out text-slate_900 hover:text-danger/90 cursor-pointer"
        onClick={() => {
          console.log('apagou')
        }}
      />
    </div>
  )
}

export { OrderItem }
