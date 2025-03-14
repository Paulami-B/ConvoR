import { securityMenuItems } from '../utils/props/SecurityProps'
import { GoShieldLock } from 'react-icons/go'

export default function SecurityOptions() {
    return (
        <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Security</h2>
            <div className='flex justify-center'>
                <GoShieldLock size={45} className='text-orange-500' />
            </div>
            <div className='my-4'>
                <h1 className='text-sm font-bold dark:text-gray-100'>Your chats and calls are private</h1>
                <p className='text-xs text-gray-600 dark:text-gray-100'>
                    End-to-end encryption keeps your personal messages & calls between<br/> 
                    you and person you choose to communicate with. Not even Convo can read<br/>
                    or listen to them. This includes your
                </p>
                <ul>
                    {securityMenuItems.map((item) => (
                        <li>
                            <div className='flex justify-start gap-3 items-center text-gray-600 dark:text-gray-100 my-4'>
                                {item.icon}
                                <div className='text-sm'>{item.title}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
