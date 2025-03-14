import { useState } from 'react'
import { PiCaretDownBold } from 'react-icons/pi'
import { privacyItems } from '../utils/props/PrivacyProps';

export default function PrivacyOptions() {
    const [activeIndex, setActiveIndex] = useState<string | null>(null);
    const [option, setOption] = useState<string>('Everyone');
    return (
        <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Privacy</h2>
            <ul>
                {privacyItems.map((item) => (
                    <li key={item.option} className='my-8'>
                        <div className='flex justify-between items-center'>
                            <div className='text-gray-500 dark:text-gray-100'>
                                <div className='text-sm font-bold'>{item.option}</div>
                                <div className='text-xs'>{item.subtext}</div>
                            </div>
                            {item.option=='Read Receipts' ? (
                                <input type="checkbox" className="w-4 h-4 accent-orange-400" />
                            ) : (
                                <div className='relative'>
                                    <PiCaretDownBold className='cursor-pointer dark:text-gray-100' 
                                    onClick={() => setActiveIndex(activeIndex==item.option ? null : item.option)} />
                                    {activeIndex==item.option && (
                                        <div className='absolute rounded bg-white dark:bg-gray-800 dark:text-gray-100 p-3 z-10 border-orange-300 shadow-2xl'>
                                            <div className='flex justify-between items-center gap-4'>
                                                <div className='text-sm'>Everyone</div>
                                                <input type="checkbox" className="w-4 h-4 accent-orange-400"
                                                checked = {option==='Everyone'}
                                                onClick={() => setOption('Everyone')} />
                                            </div>
                                            <hr className='my-1 w-full text-gray-300' />
                                            <div className='flex justify-between items-center gap-4'>
                                                <div className='text-sm'>My Contacts</div>
                                                <input type="checkbox" className="w-5 h-5 accent-orange-400"
                                                checked = {option==='MyContacts'}
                                                onClick={() => setOption('MyContacts')} />
                                            </div>
                                            <hr className='my-1 w-full text-gray-300' />
                                            <div className='flex justify-between items-center gap-4'>
                                                <div className='text-sm'>Nobody</div>
                                                <input type="checkbox" className="w-4 h-4 accent-orange-400"
                                                checked = {option==='Nobody'}
                                                onClick={() => setOption('Nobody')} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        {item.option!='Blocked Contacts' && (
                            <hr className='my-3 text-gray-300 w-full' />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}
