import { notificationItems } from '../utils/props/NotificationProps'

export default function NotificationOptions() {
  return (
    <div>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Notifications</h2>
        <ul>
            {notificationItems.map((item) => (
                <li className='my-8'>
                    <div className='flex justify-between items-center'>
                        <div className='text-gray-500 dark:text-gray-100'>
                            <div className='text-sm font-bold'>{item.option}</div>
                            <div className='text-xs'>{item.subtext}</div>
                        </div>
                        {/* Make checkbox text white */}
                        <input type="checkbox" className="w-4 h-4 accent-orange-400" />
                    </div>
                    {item.option!='Sounds' && (
                        <hr className='my-3 text-gray-300 w-full' />
                    )}
                </li>
            ))}
        </ul>
    </div>
  )
}
