interface HeadingThreeProps {
  children: React.ReactNode
}

function HeadingThree ({children}: HeadingThreeProps) {
  return (
    <h2 className="text-xl font-semibold text-slate_900">
      {children}
    </h2>
  )
}

export { HeadingThree }