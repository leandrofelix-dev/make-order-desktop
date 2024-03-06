'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/images/logo.svg'
import { Profile } from '../molecules/profile'
import { NavList } from '../molecules/nav-list'
import { Separator } from '../atoms/separator'
import { ProfileModal } from '../molecules/profile-modal'
import { useState } from 'react'

function NavBar() {
  const [openModal, setOpenModal] = useState(false)

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
          name={'Jhon Doe'}
          role={'Atendente'}
          action={() => setOpenModal(true)}
        />
      </nav>
      <Separator />
      <ProfileModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        name={'Jhon Doe'}
        role={'Atendente'}
      />
    </>
  )
}

export { NavBar }
