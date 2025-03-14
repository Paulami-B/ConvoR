import SearchBox from './SearchBox'
import CallTile from './CallTile'

export default function CallHistory() {
  return (
      <div className="h-screen w-full p-4 pt-0 md:p-4 bg-orange-50/40 dark:bg-gray-800 flex flex-col">
        <div className="top-0 h-fit sticky bg-[#FFFCF8] dark:bg-gray-800 z-50">
          <div className="text-4xl font-bold dark:text-orange-100 my-2">Call Log</div>
          <SearchBox />
          <hr className="text-gray-300 dark:text-gray-500 my-4" />
        </div>
        <div className="flex-1 overflow-auto pr-2">
            <CallTile comm='incoming' ctype='audio' />
            <CallTile comm='outgoing' ctype='video' />
            <CallTile comm='incoming' ctype='video' />
            <CallTile comm='outgoing' ctype='audio' />
        </div>
      </div>
    )
}
