import { FaArrowLeftLong } from "react-icons/fa6";
import { ChatProps } from "./ChatContainer";
import { PiVideoCamera } from "react-icons/pi";
import { FiPhone, FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function ChatHeader({selectTab}: ChatProps) {
    return (
        <div className="flex justify-start items-center gap-3 py-3 px-4 w-full bg-orange-50 dark:bg-brown h-fit top-0 sticky">
            <FaArrowLeftLong strokeWidth={8} size={25} onClick={selectTab} className="block md:hidden cursor-pointer dark:text-white" />
            <div className="h-fit w-fit relative">
                <img src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                className="w-12 h-12 rounded-full" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className="dark:text-orange-50 w-full">
                <div className="font-bold">Pink Panda</div>
                <div className="text-gray-500 dark:text-gray-300 text-sm">online</div>
            </div>
            <div className="flex justify-between gap-4 text-gray-600 dark:text-orange-50">
                <div className="flex gap-4 pr-3 border-r">
                    <PiVideoCamera className="text-2xl cursor-pointer" />
                    <FiPhone className="text-xl cursor-pointer" />
                    <FiSearch className="text-xl cursor-pointer" />
                </div>
                <MdOutlineKeyboardArrowDown className="text-2xl cursor-pointer" />
            </div>
        </div>
    )
}
