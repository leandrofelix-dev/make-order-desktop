interface CardProps {
  children: React.ReactNode
}

function Card ({children}: CardProps) {
  return (
    <section>
        <div className="bg-slate_200 rounded-xl p-8">
          {children}
        </div>
    </section>
  )
}

export { Card }