import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/images/logo.svg'
import { Profile } from '../molecules/profile'
import { NavList } from '../molecules/nav-list'
import { Separator } from '../atoms/separator'
import { ProfileModal } from '../molecules/profile-modal'
import { useEffect, useState } from 'react'
import { getUserCredentials } from '../../actions/get-user-credentials'

function NavBar() {
  const [openModal, setOpenModal] = useState(false)
  const [user, setUser] = useState({
    nome: 'Leandro Felix',
    cargo: 'atendente',
    email: 'adm@makeorder.com'
  })

  useEffect(() => {
    fetchUserCredentials()
  }, [])

  const fetchUserCredentials = async () => {
    try {
      const response = await getUserCredentials()
      console.log(response)
      if (!response) console.error('Erro ao obter os dados do usuário')
      setUser(response)
    } catch (error) {
      console.error('Erro ao obter os dados do usuário:', error)
    }
  }

  return (
    <>
      <nav className="flex justify-between items-center z-10">
        <div className="flex gap-8">
          <Link href="/dashboard">
            <Image
              src={Logo.src}
              alt="Logo MakeOrder"
              width={120}
              height={32}
            />
          </Link>
          <NavList />
        </div>
        <Profile
          name={user.nome}
          role={user.cargo}
          action={() => setOpenModal(true)}
        />
      </nav>
      <Separator />
      <ProfileModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        name={user.nome}
        role={user.cargo}
      />
    </>
  )
}

export { NavBar }
