import { FaTag } from "react-icons/fa6";
import { NavItem } from "../atoms/nav-item";
import { MdDataSaverOff, MdSpaceDashboard } from "react-icons/md";

function NavList() {
  return (
    <div className="flex gap-2">
      <NavItem label="Dashboard" href="/dashboard" icon={MdDataSaverOff} />
      <NavItem label="Lista" href="/lista" icon={FaTag} />
      <NavItem label="Quadro" href="/quadro" icon={MdSpaceDashboard} />
    </div>
  );
}

export { NavList };
