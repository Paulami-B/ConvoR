import React from 'react'
import { ImCross } from 'react-icons/im'
import { useModalStore } from '../utils/slices/menuSlice'
import { settingsModal } from '../utils/props/SettingsProps'
import { FaArrowLeftLong } from 'react-icons/fa6';

export default function Modal({setShowModal}: {setShowModal: React.Dispatch<React.SetStateAction<boolean>>}) {
    const { modalData, setModalData } = useModalStore();
    return (
        <div className='fixed inset-0 bg-gray-400/80 flex items-center justify-center'>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl min-w-96 w-fit p-6 relative">
                <div className='flex justify-between mb-4 items-center'>
                    {modalData=='Blocked' && (
                        <FaArrowLeftLong size={20} className="text-gray-500 dark:text-gray-100 hover:text-red-600 cursor-pointer"
                        onClick={() => setModalData('Privacy')} />
                    )}
                    <ImCross size={12} className="absolute top-5 right-5 text-gray-500 dark:text-gray-100 hover:text-red-600 cursor-pointer"
                    onClick={() => setShowModal(false)} />
                </div>
                {settingsModal.find((item) => item.title==modalData)?.component}
            </div>
        </div>
    )
}
