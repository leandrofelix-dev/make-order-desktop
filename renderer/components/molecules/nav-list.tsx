import { FaTag } from "react-icons/fa6";
import { NavItem } from "../atoms/nav-item";
import { MdDataSaverOff, MdSpaceDashboard } from "react-icons/md";

function NavList () {

  return (
    <div className="flex gap-2">
        <NavItem active>
          <MdDataSaverOff size={24} className={"text-slate_50"}/>
          Dashboard
        </NavItem>
        <NavItem>
          <FaTag size={24} className={"text-primary"}/>
          Lista
        </NavItem>
        <NavItem>
          <MdSpaceDashboard size={24} className={"text-primary"}/>
          Quadro
        </NavItem>
      </div>
  )
}

export { NavList }