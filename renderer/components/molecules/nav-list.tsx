import { FaTag } from "react-icons/fa6";
import { NavItem } from "../atoms/nav-item";
import { MdDataSaverOff, MdSpaceDashboard } from "react-icons/md";
import Link from "next/link";

function NavList () {

  return (
    <div className="flex gap-2">
        <Link href="/dashboard">
          <a>
          <NavItem active>
            <MdDataSaverOff size={24} className={"text-slate_50"}/>
            Dashboard
          </NavItem>
          </a>
        </Link>
        <Link href="/lista">
          <a>
          <NavItem>
            <FaTag size={24} className={"text-primary"}/>
            Lista
          </NavItem>
          </a>
        </Link>
        <Link href="/quadro">
          <a>
          <NavItem>
            <MdSpaceDashboard size={24} className={"text-primary"}/>
            Quadro
          </NavItem>
          </a>
        </Link>
      </div>
  )
}

export { NavList }