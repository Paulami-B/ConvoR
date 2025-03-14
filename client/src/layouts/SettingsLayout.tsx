import SettingsSideBar from '../components/SettingsSideBar'
import { useState } from 'react'
import Modal from '../components/Modal';

export default function SettingsLayout() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className='grid grid-cols-11'>
      <div className="col-span-3">
        <SettingsSideBar setShowModal={setShowModal} />
      </div>
      <div className="col-span-8 h-full w-full flex justify-center p-36">
        <img src="./Settings.png" width={400} height={200} />
        {showModal && (
          <Modal setShowModal={setShowModal} />
        )}
      </div>
    </div>
  )
}