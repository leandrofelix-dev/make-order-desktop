type variant = 'primary' | 'danger' | 'loading' | 'disabled'

interface ButtonProps {
  variant: variant
  action: () => void
  children?: React.ReactNode
}

function Button({ variant, action, children }: ButtonProps) {
  const color =
    variant === 'primary' || 'danger' ? 'text-slate_50' : 'text-slate-700'
  const bg = variant === 'primary' || 'danger' ? 'bg-primary' : 'bg-danger'

  return (
    <button
      className={`${bg} ${color} bg-opacity-90 font-bold rounded-md p-2 pointer h-10 w-full flex items-center justify-center gap-2 hover:bg-opacity-100 text-sm`}
      onClick={action}
    >
      {children}
    </button>
  )
}

export { Button }
