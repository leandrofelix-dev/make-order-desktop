interface HeadingFourProps {
  children: React.ReactNode
}

function HeadingFour ({children}: HeadingFourProps) {
  return (
    <h2 className="text-xl font-bold text-slate_900">
      {children}
    </h2>
  )
}

export { HeadingFour }