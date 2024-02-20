import { FaTrash } from "react-icons/fa";

interface MenuItemProps {
    prato: string
    ingredientes: string
}

function MenuItem ({prato, ingredientes}: MenuItemProps) {
    return (
        <div className='bg-slate_50 p-4 flex items-center justify-between rounded-md my-2'>
            <b className="w-[calc(50%+16px)]">{prato}</b>
          <span className="text-slate_700 font-semibold">{`${ingredientes.substring(0, 40)}...`}</span>
          <FaTrash className='transition-all ease-in-out text-slate_900 hover:text-danger/90 cursor-pointer' onClick={() => {alert('apagou')}}/>
        </div>
    )
}

export { MenuItem }