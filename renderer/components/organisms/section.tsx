interface SectionProps {
    children: React.ReactNode
}

function Section ({children}: SectionProps) {
    return (
        <section className="my-4 flex gap-4">
            {children}
        </section>
    )
}

export { Section }