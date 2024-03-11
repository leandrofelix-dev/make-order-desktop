/* eslint-disable no-unused-vars */
type variant = 'primary' | 'danger' | 'neutral' | 'disabled'

interface ButtonProps {
  variant: variant
  action?: (data: any) => void | Promise<void>
  children?: React.ReactNode
  disabled?: boolean
}

function Button({ variant, action, children, disabled }: ButtonProps) {

    let bg = ''
    let text = ''

    switch (variant) {
      case 'primary':
        bg = 'bg-primary'
        text = 'text-slate_50'
        break
      case 'danger':
        bg = 'bg-danger'
        text = 'text-slate_50'
        break
        case 'neutral':
          bg = 'border-2 border-primary hover:bg-primary/10'
          text = 'text-primary'
          break
    
      default:
        break
    }

  disabled ? bg = 'bg-slate_300 cursor-not-allowed text-slate_500 my-2' : bg
    

  return (
    <button
      className={`${bg} ${text} bg-opacity-90 font-bold rounded-md p-2 pointer h-10 w-full flex items-center justify-center gap-2 hover:bg-opacity-100 text-sm`}
      onClick={action}
    >
      {children}
    </button>
  )
}

export { Button }
