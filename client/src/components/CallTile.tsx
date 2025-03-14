import { CgArrowBottomLeft, CgArrowTopRight } from 'react-icons/cg'
import { FiPhone } from 'react-icons/fi'
import { PiVideoCamera } from 'react-icons/pi'

type CallType = {
    comm: 'incoming' | 'outgoing',
    ctype: 'audio' | 'video'
}

export default function CallTile({comm, ctype}: CallType) {
  return (
    <div className='p-3 bg-orange-50 dark:bg-gray-700/80 w-full flex justify-between items-center rounded my-2'>
                <div className='flex gap-3 items-center'>
                    <img src='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
                    className='w-15 h-15 rounded-full' />
                    <div>
                        <p className='font-bold dark:text-gray-300'>Red Panda</p>
                        <div className='flex gap-2 items-center'>
                            {comm=='outgoing' ? (
                                <CgArrowTopRight className='text-green-500' size={22} />
                            ) : (
                                <CgArrowBottomLeft className='text-green-500' size={22} />
                            )}
                            <p className='text-sm text-gray-600 dark:text-gray-400'>Yesterday, 19:55</p>
                        </div>
                    </div>
                </div>
                {ctype == 'video' ? (
                    <PiVideoCamera className='text-green-500' strokeWidth={1.4} size={20} />
                ) : (
                    <FiPhone className='text-green-500' strokeWidth={1.5} size={20} />
                )}
              </div>
  )
}
