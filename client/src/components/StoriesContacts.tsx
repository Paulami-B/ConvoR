export default function StoriesContacts({setShowStories}: {setShowStories: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div className='h-screen w-full p-4 pt-0 md:p-4 bg-orange-50/40 dark:bg-gray-800 flex flex-col'>
      <h1 className="top-0 h-fit sticky bg-[#FFFCF8] dark:bg-gray-800 text-4xl font-bold dark:text-orange-100 my-2 py-4 hidden md:block">Updates</h1>
      <div className="overflow-auto">
        <p className="text-gray-600 font-semibold mt-5 mb-2 dark:text-gray-300">Not seen</p>
        <div className="">
          <button className="bg-orange-50 dark:bg-orange-900/40 flex justify-between items-center p-3 w-full cursor-pointer hover:bg-orange-200/80 dark:hover:bg-orange-800/70 rounded-lg"
          onClick={() => setShowStories(true)}>
            <div className="flex gap-4 items-center">
              <img src="https://avatar.iran.liara.run/public/29" className="w-15 h-15 rounded-full border-3 border-green-600"/>
              <p className="font-bold dark:text-gray-300">Red Panda</p>
            </div>
            <p className="text-xs text-gray-600 text-end dark:text-gray-300">6:42 am</p>
          </button>
        </div>
        <p className="text-gray-600 font-semibold mt-5 mb-2 dark:text-gray-300">Seen</p>
        <div className="">
          <button className="bg-orange-50 dark:bg-orange-900/40 flex justify-between items-center p-3 w-full cursor-pointer hover:bg-orange-200/80 dark:hover:bg-orange-800/70 rounded-lg"
          onClick={() => setShowStories(true)}>
            <div className="flex gap-4 items-center">
              <img src="https://avatar.iran.liara.run/public/54" className="w-15 h-15 rounded-full border-3 border-green-600"/>
              <p className="font-bold dark:text-gray-300">Red Panda</p>
            </div>
            <p className="text-xs text-gray-600 text-end dark:text-gray-300">6:42 am</p>
          </button>
        </div>
      </div>
    </div>
  )
}
