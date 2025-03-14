import { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import MessageBox from './MessageBox'
import { ImCross } from 'react-icons/im';

const arr = [
  "https://avatar.iran.liara.run/public/29",
  "https://avatar.iran.liara.run/public/30",
  "https://avatar.iran.liara.run/public/31"
]
export default function StoriesContainer({setShowStories}: {setShowStories: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev+1));
    }, 3000);
    return () => clearInterval(interval);
  }, [])
  return (
    <div className='w-full h-screen p-8 pb-0'>
      <div className='flex justify-between'>
        <p className='font-bold mb-4 text-lg dark:text-gray-100'>Red Panda</p>
        <ImCross className='cursor-pointer hover:text-red-500 dark:text-gray-100' onClick={() => setShowStories(false)} />
      </div>
      <div className='flex justify-between items-center'>
        <IoIosArrowBack size={20} strokeWidth={20} className='text-gray-500 cursor-pointer hover:text-black dark:text-gray-300 dark:hover:text-white' />
        <div className=''>
          <img src={arr[Math.min(index, arr.length-1)]} className='h-[500px] w-[391px] rounded-lg' />
        </div>
        <IoIosArrowForward size={20} strokeWidth={20} className='text-gray-500 cursor-pointer hover:text-black dark:text-gray-300 dark:hover:text-white' />
      </div>
      <div className="absolute bottom-0 w-3/5">
        <MessageBox />
      </div>
    </div>
  )
}
