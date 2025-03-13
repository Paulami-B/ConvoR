import { useState } from 'react'
import Icon from '../components/Icon'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import GoogleAuth from '../components/GoogleAuth'

export default function AuthPage() {
    const [activeTab, setActiveTab] = useState<'signup' | 'signin'>('signup')
    return (
        <div className='md:grid md:grid-cols-2'>
            <div className='md:col-span-1 py-8 px-8 flex justify-center items-center'>
                <div className='w-full'>
                    <Icon size='text-7xl' text='ConvoR' />
                    <div className='my-4 flex justify-center'>
                        <GoogleAuth />
                    </div>
                    {activeTab=='signup' ? (
                        <p className='font-caveat text-3xl'>Hey, there!! Please sign up to get started</p>
                    ) : (
                        <p className='font-caveat text-3xl'>Welcome back!! Please sign in to continue</p>
                    )}
                    <div className='flex w-full mt-16 md:mt-4'>
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
            <div className='hidden md:col-span-1 bg-orange-50 h-screen w-full md:flex justify-center p-8'>
                <div>
                    <img src='./AuthImage.png' width={450}/>
                    <p className='font-caveat text-center text-4xl my-8'>Talk. Share. Stay in touch.</p>
                </div>
            </div>
        </div>
    )
}
