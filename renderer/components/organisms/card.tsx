type size = "sm" | "md"

interface CardProps {
  children: React.ReactNode
  size?: size
}

function Card ({children, ...props}: CardProps) {
  return (
    <section>
        <div className={'bg-slate_200 rounded-xl p-8 flex flex-col'}>
          {children}
        </div>
    </section>
  )
}

export { Card }