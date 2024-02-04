interface HeadingTwoProps {
  children: React.ReactNode
}

function HeadingTwo ({children}: HeadingTwoProps) {
  return (
    <h2 className="text-2xl font-semibold text-slate_900">
      {children}
    </h2>
  )
}

export { HeadingTwo }