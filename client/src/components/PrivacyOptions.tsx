import { useState } from 'react'
import { PiCaretDownBold } from 'react-icons/pi'
import { privacyItems } from '../utils/props/PrivacyProps';
import DropDownList from './DropDownList';
import { useModalStore } from '../utils/slices/menuSlice';

export default function PrivacyOptions() {
    const [activeIndex, setActiveIndex] = useState<string | null>(null);
    const [option, setOption] = useState<string>('Everyone');
    const { setModalData } = useModalStore();
    return (
        <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Privacy</h2>
            <ul>
                {privacyItems.map((item) => (
                    item.option=='Blocked Contacts' ? (
                        <button className='text-gray-500 dark:text-gray-100 cursor-pointer'
                        onClick={() => setModalData('Blocked')}>
                            <div className='text-sm font-bold'>{item.option}</div>
                            <div className='text-xs text-start'>{item.subtext}</div>
                        </button>
                    ) : (
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
                                        <DropDownList option={option} setOption={setOption} />
                                    )}
                                </div>
                            )}
                        </div>
                    </li>
                    )
                ))}
            </ul>
        </div>
    )
}
