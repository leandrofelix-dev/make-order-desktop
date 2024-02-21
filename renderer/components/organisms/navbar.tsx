import Link from "next/link";
import Image from "next/image";
import Logo from '../../public/images/logo.svg';
import { Profile } from "../molecules/profile";
import { NavList } from "../molecules/nav-list";
import { Separator } from "../atoms/separator";
import { useState } from "react";
import { ProfileModal } from "../molecules/profile-modal";

function NavBar() {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  return (
    <>
      <nav className="flex justify-between items-center z-10">
        <div className="flex gap-8">
          <Link href="/dashboard">
            <Image src={Logo.src} alt="Logo MakeOrder" width={120} height={32} />
          </Link>
          <NavList />
        </div>
        <div>
          <Profile name={"Jhon Doe"} role={"Atendente"} action={handleOpenModal} />
          {openModal && (
            <ProfileModal isOpen={openModal} onClose={handleCloseModal} />
          )}
        </div>
      </nav>
      <Separator />
    </>
  );
}

export { NavBar };
