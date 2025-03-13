import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import { TitleType } from '../utils/props/SideBarProps'

export default function HomePage() {
  const [option, setOption] = useState<TitleType>('message')
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-1'>
        <SideBar option={option} setOption={setOption} />
      </div>
      <div className='col-span-11'>
      </div>
    </div>
  )
}
