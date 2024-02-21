import Image from "next/image"

interface ProfileProps {
  name: string
  role: string
  action: () => void
}

function Profile({ name, role, action }: ProfileProps) {

  return (
    <div className="flex items-center gap-3 cursor-pointer hover:bg-slate_200" onClick={action}>
      <div>
        <p className="text-slate_900 text-lg font-bold">{name}</p>
        <p className="text-slate_500 text-sm font-semibold">{role}</p>
      </div>
      <Image src="/images/profile.png" alt="Foto de perfil" width={44} height={44} className="rounded-full" />
    </div>
  )
}

export { Profile }