import Link from "next/link";
import Image from "next/image";
import Logo from '../../public/images/logo.svg';
import { Profile } from "../molecules/profile";
import { NavList } from "../molecules/nav-list";
import { Separator } from "../atoms/separator";

function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center">
        <div className="flex gap-8">
          <Link href="/dashboard">
            <Image src={Logo.src} alt="Logo MakeOrder" width={120} height={32}/>
          </Link>
          <NavList />
        </div>
        <Profile name={"Jhon Doe"} role={"Atendente"} />
      </nav>
      <Separator />
    </>
  );
}

export { NavBar };
