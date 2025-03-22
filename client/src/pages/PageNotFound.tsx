import React from 'react'

export default function PageNotFound() {
  return (
    <div className='h-screen w-screen bg-orange-100/40 dark:bg-black flex justify-center items-center'>
        <div>
            <img src='/NotFound.png' className='h-100' />
            <div className='font-pacifico my-8 text-center text-5xl'>Page not found</div>
        </div>
    </div>
  )
}
