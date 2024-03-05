import { HiOutlineSearch } from 'react-icons/hi'

function SearchBar () {
  return (
    <div className="flex text-slate_500 items-center">
      <HiOutlineSearch className="-mr-8 z-10"/>
      <input type="text" placeholder="Buscar pedidos"
      className="bg-slate_50 border-2 border-slate_300 h-12 w-60 rounded-lg text-sm
      placeholder:text-slate_500 placeholder:text-sm px-10 focus:outline-2 focus:outline-primary/50"/>
    </div>
  )
}
export { SearchBar }
