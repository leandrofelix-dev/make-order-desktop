interface BoxProps {
  children: React.ReactNode
}

function Box ({children}: BoxProps) {
  return (
    <div className="gap-4 flex justify-start items-center flex-col">
      {children}
    </div>
  )
}

export { Box }