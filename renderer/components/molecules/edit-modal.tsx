interface EditModalProps {

  prato: string
  isOpen: any
  onClose: any
  children: string
}
const EditModal = ({ isOpen, onClose, children, prato}: EditModalProps) => {

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-slate_100 p-8 rounded-xl flex flex-col shadow-md w-full h-full max-w-[644px] max-h-[459px]">
        <b className="w-[calc(50%+16px)]">{children}</b>
        <span className="text-slate_700 font-semibold">{prato}</span>

        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  )
}

export { EditModal }