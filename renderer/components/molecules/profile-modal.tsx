/* eslint-disable react/prop-types */
import Link from 'next/link'

function ProfileModal ({ isOpen, onClose }) {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="fixed top-28 right-80 p-4 rounded-xl bg-slate_100 shadow-md w-full h-full max-w-[320px] max-h-[129px]">
          <Link href="/login">Faça o login</Link>
          <p/>
          <Link href="/register">Registre-se</Link>
          <p />
          <button onClick={onClose}>Fechar</button>
        </div>
      </div>

    </div>
  )
}

export { ProfileModal }
