interface ProfileProps {
  name: string
  role: string
}

function BestDishes ({ name, role }: ProfileProps) {
  return (
    <div className="flex items-center gap-3 rounded-md my-2 bg-slate_50 py-3 pl-4 pr-16 justify-items-start">
      <div>
        <p className="text-slate_900 text-lg font-bold">{name}</p>
        <p className="text-slate_500 text-sm font-semibold">{role}</p>
      </div>  
    </div>
  )
}

export { BestDishes }