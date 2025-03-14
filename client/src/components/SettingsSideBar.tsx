import { settingsMenuItems, SettingType } from '../utils/props/SettingsProps'

type SettingsSideBarProps = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    setModalData: React.Dispatch<React.SetStateAction<SettingType | undefined>>
}

export default function SettingsSideBar({setShowModal, setModalData}: SettingsSideBarProps) {
    return (
      <div className="top-0 sticky h-screen w-full bg-orange-50 dark:bg-brown dark:shadow-orange-200 shadow-lg">
          <div className="flex relative h-full">
              <div className="absolute top-0 w-full">
                    <div className="pt-5 pb-8 ml-3 font-bold text-3xl dark:text-warmamber">
                        Settings
                    </div>
                    <button className='cursor-pointer flex justify-start mx-6 items-center gap-6 text-gold'
                    onClick={() => {
                        setShowModal(true);
                        setModalData('Profile')
                    }}>
                        <img src='https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' 
                        className="rounded-full w-15 h-15" />
                        <div>
                            <div className='font-bold'>Red Panda</div>
                            <div className='text-sm'>Exploring</div>
                        </div>
                    </button>
                  <ul className='my-12'>
                      {settingsMenuItems.map((item) => (
                        <li className='w-full px-3 my-8 hover:font-bold'>
                            <div className='flex justify-start items-start gap-3 text-gray-700 dark:text-orange-100 cursor-pointer text-2xl'
                            onClick={() => {
                                setShowModal(true);
                                setModalData(item.title)
                            }}>
                                {item.icon}
                                <div className='text-base'>{item.title}</div>
                            </div>
                            {item.title!='Help' && (
                                <hr className="text-gray-300 dark:text-orange-800 text-4xl font-bold my-3" />
                            )}
                        </li>
                      ))}
                  </ul>
              </div>
          </div>
      </div>
    )
}