import React from 'react'
import Link from 'next/link'

interface ButtonItemProps {
  label: string;
  href: string;
}

function ButtonItem({ label, href }: ButtonItemProps) {
  let actualPath = ''
  if (typeof window !== 'undefined') {
    actualPath = window.location.pathname
  }
  const bg =
    actualPath && actualPath.includes(href)
      ? 'bg-slate_200 text-slate_900'
      : 'bg-primary text-slate_50'

  return (
    <>
      <Link href={href}>
        <div
          className={`flex gap-2 items-center justify-center h-10 px-2.5 rounded-lg font-semibold text-sm cursor-pointer ${bg}`}
        >
          {label}
        </div>
      </Link>
    </>
  )
}

export { ButtonItem }
