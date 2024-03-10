import React from 'react'

interface ListItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

function ListItem({ label, isActive, onClick }: ListItemProps) {
  const bg = !isActive
    ? 'bg-slate_200 text-slate_900'
    : 'bg-primary text-slate_50'

  return (
    <>
      <div
        className={`flex gap-2 items-center justify-center h-10 px-2.5 rounded-lg font-semibold text-sm cursor-pointer ${bg}`}
        onClick={onClick}
      >
        {label}
      </div>
    </>
  )
}

export { ListItem }
