import Image from 'next/image'
import { FaTrash } from 'react-icons/fa'

interface KBCardProps {
  title: string;
  descricao: string;
  mesa: string;
  id: string;
  onDelete: () => void;
}

function KBCard({ title, descricao, mesa, id, onDelete }: KBCardProps) {
  return (
    <div className="bg-slate_50 px-6 py-4 rounded-lg w-[300px] flex flex-col gap-2 shadow-md shadow-slate_200 my-2">
      <FaTrash 
        size={16}
        className='transition-all ease-in-out text-slate_900 hover:text-danger/90 cursor-pointer' 
        onClick={onDelete} // Chama a função onDelete quando o ícone da lixeira é clicado
      />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold text-slate_900">{title}</p>
          <span className="text-slate_700 text-sm">{descricao}</span>
        </div>
        <Image src="/images/profile.png" alt="Foto de perfil" width={36} height={36} className="rounded-full" />
      </div>
      <div className="flex gap-2">
        <Tag title={mesa} />
        <Tag title={id} />
      </div>
    </div>
  )
}

function Tag ({title} : {title: string}) {
  return (
    <p className="text-slate_700 border-2 border-slate_300 px-1 py-[2px] rounded-full text-[12px] font-semibold">{title}</p>
  )
}

export { KBCard }
