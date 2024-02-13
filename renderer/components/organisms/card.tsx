interface CardProps {
  children: React.ReactNode
}


function Card ({children}: CardProps) {

  return (
    <section className={'w-full max-w-[932px]'}>
        <div className={'bg-slate_200 rounded-xl p-8 flex flex-col'}>
          {children}
        </div>
    </section>
  )
}

export { Card }