interface TitleProps {
  children: React.ReactNode
}

function Title ({ children }: TitleProps) {
  return (
    <h2 className="text-3xl font-bold text-slate_900">{children}</h2>
  )
}

export { Title }