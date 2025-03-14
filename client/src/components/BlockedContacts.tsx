import SearchBox from './SearchBox'
import { HiOutlineMinusCircle } from 'react-icons/hi'

export default function BlockedContacts() {
  return (
    <div className='min-w-96'>
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Blocked Contacts</h2>
        <SearchBox />
        <div className='my-4'>
            <div className='flex justify-between gap-3 my-1 w-full items-center'>
                <div className='flex gap-3 items-center'>
                    <img src='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
                    className='w-12 h-12 rounded-full' />
                    <div>
                        <p className='text-sm font-bold'>Red Panda</p>
                        <p className='text-xs'>Explorer</p>
                    </div>
                </div>
                <HiOutlineMinusCircle size={20} className='cursor-pointer hover:text-orange-500' />
            </div>
        </div>
    </div>
  )
}
