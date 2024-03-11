import Link from 'next/link'
import { IconType } from 'react-icons'
import { useRouter } from 'next/router'

interface NavItemProps {
  label: string
  icon: IconType
  href: string
}

function NavItem ({
  label,
  icon ,
  href
}: NavItemProps) {
  const router = useRouter()
  const actualPath = router.pathname

  const bg = actualPath === href ? 'bg-primary text-slate_50' : 'bg-slate_100 text-slate_900'
  const iconColor = actualPath === href ? 'text-slate_50' : 'text-primary'
  
  return (
    <Link href={href}>
      <div className={`flex gap-2 items-center justify-center h-8 px-2.5 rounded-lg font-semibold  text-sm cursor-pointer ${bg}`}>
        {icon({ size: 24, className: iconColor })}
        {label}
      </div >
    </Link>
  )
}
export { NavItem }
