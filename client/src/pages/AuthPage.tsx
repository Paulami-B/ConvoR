import { useState } from 'react'
import Icon from '../components/Icon'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'

export default function AuthPage() {
    const [activeTab, setActiveTab] = useState<'signup' | 'signin'>('signup')
  return (
    <div className='grid grid-cols-2'>
        <div className='col-span-1 py-8 px-8 flex justify-center items-center'>
            <div className='w-full'>
                <Icon size='text-7xl' text='ConvoR' />
                {activeTab=='signup' ? (
                    <p className='font-caveat text-3xl'>Hey, there!! Please sign up to get started</p>
                ) : (
                    <p className='font-caveat text-3xl'>Welcome back!!</p>
                )}
                <div className='mt-4 flex w-full'>
                    <button className={`w-1/2 p-2 cursor-pointer hover:font-bold border-b-4 
                    ${activeTab=='signup' ? "font-bold border-orange-400": "font-semibold border-gray-200"}`} 
                    onClick={() => setActiveTab('signup')}>
                        Sign up
                    </button>
                    <button className={`w-1/2 p-2 cursor-pointer hover:font-bold border-b-4 
                    ${activeTab=='signin' ? "font-bold border-orange-400": "font-semibold border-gray-200"}`} 
                    onClick={() => setActiveTab('signin')}>
                        Sign In
                    </button>
                </div>
                <div className='my-3'>
                    {activeTab=='signup' ? (
                        <SignUp />
                    ) : (
                        <SignIn />
                    )}
                </div>
            </div>
        </div>
        <div className='col-span-1 bg-orange-50 h-screen w-full flex justify-center'>
            <div>
                <img src='./AuthImage.png' width={450}/>
                <p className='font-caveat text-center text-4xl my-8'>Talk. Share. Stay in touch.</p>
            </div>
        </div>
    </div>
  )
}
