import React from 'react'

type DropDownProps = {
    option: string,
    setOption: React.Dispatch<React.SetStateAction<string>>
}
export default function DropDownList({option, setOption}: DropDownProps) {
    return (
        <div className='absolute rounded bg-white dark:bg-gray-800 dark:text-gray-100 p-3 z-10 border-orange-300 shadow-2xl'>
            <div className='flex justify-between items-center gap-4'>
                <div className='text-sm'>Everyone</div>
                <input type="checkbox" className="w-4 h-4 accent-orange-400"
                checked = {option==='Everyone'} onClick={() => setOption('Everyone')} />
            </div>
            <hr className='my-1 w-full text-gray-300' />
            <div className='flex justify-between items-center gap-4'>
                <div className='text-sm'>My Contacts</div>
                <input type="checkbox" className="w-5 h-5 accent-orange-400"
                checked = {option==='MyContacts'} onClick={() => setOption('MyContacts')} />
            </div>
            <hr className='my-1 w-full text-gray-300' />
            <div className='flex justify-between items-center gap-4'>
                <div className='text-sm'>Nobody</div>
                <input type="checkbox" className="w-4 h-4 accent-orange-400"
                checked = {option==='Nobody'} onClick={() => setOption('Nobody')} />
            </div>
        </div>
    )
}
