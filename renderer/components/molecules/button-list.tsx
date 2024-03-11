/* eslint-disable no-unused-vars */

import React from 'react'
import { ListItem } from '../atoms/list-item'

interface ButtonListProps {
  active: number;
  onItemClick: (index: number) => void;
}

function ButtonList({ active, onItemClick }: ButtonListProps) {
  const handleItemClick = (index: number) => {
    onItemClick(index)
  }

  const renderListItems = () => {
    return ['Aguardando confirmação', 'Em preparo', 'Concluído'].map(
      (label, index) => (
        <ListItem
          key={index}
          label={label}
          isActive={index === active}
          onClick={() => handleItemClick(index)}
        />
      )
    )
  }

  return (
    <div className="flex items-center justify-between gap-2">
      {renderListItems()}
    </div>
  )
}

export { ButtonList }
