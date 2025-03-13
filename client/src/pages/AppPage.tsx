import { useState } from 'react'
import { TitleType } from '../utils/props/SideBarProps'
import ChatLayout from '../layout/ChatLayout'
import VerticalSideBar from '../components/VerticalSideBar'

export default function AppPage() {
  const [option, setOption] = useState<TitleType>('message')
  return (
    <div className='h-screen w-screen md:grid md:grid-cols-12'>
      <div className='hidden md:block md:col-span-1'>
        <VerticalSideBar option={option} setOption={setOption} />
      </div>
      <div className='md:col-span-11'>
        <ChatLayout />
      </div>
    </div>
  )
}
