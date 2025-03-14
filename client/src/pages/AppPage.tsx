import VerticalSideBar from '../components/VerticalSideBar'
import { appItems } from '../utils/props/AppProps'
import { useSetOption } from '../utils/customHooks/menuOption'
import SettingsLayout from '../layouts/SettingsLayout';

export default function AppPage() {
  const { option } = useSetOption();
  return (
    <div className='h-screen w-screen md:grid md:grid-cols-12'>
      <div className='hidden md:block md:col-span-1'>
        <VerticalSideBar />
      </div>
      <div className='md:col-span-11'>
        <SettingsLayout />
      </div>
    </div>
  )
}