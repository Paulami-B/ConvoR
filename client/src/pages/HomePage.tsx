import React from 'react'
import SideBar from '../components/SideBar'

export default function HomePage() {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-1'>
        <SideBar />
      </div>
    </div>
  )
}
