export default function EmptyContacts() {
  return (
    <div className="w-full h-full flex justify-center items-center font-pacifico bg-[#FFFCF8] dark:bg-black">
        <div>
            <div className="py-6 text-4xl text-orange-500">It's quiet in here</div>
            <img src="/EmptyChat1.png" className="h-48 items-center my-12 hidden dark:block" />
            <img src="/EmptyChat2.png" className="h-48 items-center my-12 block dark:hidden" />
        </div>
    </div>
  )
}
