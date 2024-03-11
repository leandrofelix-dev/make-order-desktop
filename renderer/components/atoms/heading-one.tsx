interface HeadingOneProps {
  children: React.ReactNode
}

function HeadingOne ({ children }: HeadingOneProps) {
  return (
    <h2 className="text-3xl font-bold text-slate_900">{children}</h2>
  )
}

export { HeadingOne }