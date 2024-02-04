interface ViewProps {
  children: React.ReactNode
}

function View ({ children }: ViewProps) {
  return (
    <main className="flex h-screen w-screen bg-slate_100 justify-center py-10">
      <section className="w-5/6 max-w-screen-xl">{children}</section>
    </main>
  )
}

export { View }