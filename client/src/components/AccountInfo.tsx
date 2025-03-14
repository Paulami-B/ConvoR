import { HiOutlineClipboardList } from 'react-icons/hi'

export default function AccountInfo() {
  return (
    <div>
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Request Account Info</h2>
        <div className='flex justify-center'>
            <HiOutlineClipboardList size={60} strokeWidth={1.2} className='text-orange-500' />
        </div>
        <button className='cursor-pointer font-bold text-gray-600 dark:text-gray-100'>Request Report</button>
        <hr className='text-gray-300 w-full my-4'/>
        <p className='text-gray-600 dark:text-gray-100 text-sm'>Create a report of your Convo account information and settings,<br/>
            which you can access or port to another app. The report does <br/>
            not include your messages.
        </p>
    </div>
  )
}
