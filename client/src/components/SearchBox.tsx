import { FiSearch } from 'react-icons/fi'

export default function SearchBox() {
    return (
        <div className="flex items-center gap-2 bg-orange-50 dark:bg-brown rounded-lg p-3">
            <FiSearch size={20} strokeWidth={3} className="text-orange-500" />
            <input className="w-full border-none focus:outline-none focus:ring-0 text-lg dark:text-orange-100 dark:placeholder-orange-100" placeholder="Search" />
        </div>
    )
}
