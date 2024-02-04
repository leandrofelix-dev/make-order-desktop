import Link from "next/link"

interface NavItemProps {
  children: React.ReactNode
  active?: boolean
}

function NavItem ({
  children, active
}: NavItemProps) {
  const variant = active ? "bg-primary text-slate_50" : "bg-slate_100 text-slate_900"
  return (
    <div  className={`flex gap-2 items-center justify-center h-8 px-2.5 rounded-lg font-semibold  text-sm ${variant}`}>
      {children}
    </div >
  )
}
export { NavItem }