'use client'
import Image from 'next/image'
import { Button } from '../atoms/button'
import { FaDoorOpen } from 'react-icons/fa'

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  role: string;
}

function ProfileModal({ isOpen, onClose, name, role }: ProfileModalProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute bg-slate_900/30 w-full h-full top-0 left-0"
            onClick={onClose}
          ></div>
          <div className="absolute p-4 rounded-xl bg-slate_100 right-32 top-28 w-full max-w-[320px] max-h-40 z-50 gap-4 flex flex-col">
            <div className="flex justify-between flex-col gap-4">
            <>
                  <div className="flex items-center">
                    <div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
                      <Image
                        src="/images/profile.png"
                        alt="Foto de perfil"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <p className="text-slate_900 text-lg font-bold">{`Olá, ${name}`}</p>
                      <p className="text-slate_500 text-sm font-semibold">
                        {role}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button variant={'danger'} action={() => {
                      global.localStorage.removeItem('token')
                      global.localStorage.removeItem('user')
                      global.location.href = '/conta/login'
                    }}>
                      <FaDoorOpen size={20} />
                      Sair
                    </Button>
                  </div>
                </>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export { ProfileModal }
