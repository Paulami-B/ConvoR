import VerticalSideBar from '../components/VerticalSideBar'
import { appItems } from '../utils/props/AppProps'
import { useOptionStore } from '../utils/slices/menuSlice'

export default function AppPage() {
  const { option } = useOptionStore();
  return (
    <div className='h-screen w-screen md:grid md:grid-cols-12'>
      <div className='hidden md:block md:col-span-1'>
        <VerticalSideBar />
      </div>
      <div className='md:col-span-11'>
        {appItems.find(item => item.name==option)?.component}
      </div>
    </div>
  )
}