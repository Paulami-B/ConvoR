import Icon from "./Icon";
import { Link } from "react-router-dom";
import { sidebarMenuItems } from "../utils/props/SideBarProps";
import ThemeButton from "./ThemeButton";
import { useOptionStore } from "../utils/slices/menuSlice";

export default function VerticalSideBar() {
    const { option, setOption } = useOptionStore();
    return (
        <div className="top-0 sticky h-screen w-full bg-orange-50 dark:bg-espresso dark:bg-brown shadow-lg">
            <div className="flex justify-center items-center relative h-full">
                <div className="absolute top-0 ml-3">
                    <div className="flex justify-center my-5">
                        <Icon size="text-6xl" />
                    </div>
                    <ul>
                        {sidebarMenuItems.map((item) =>(
                            <li key={item.title}>
                                <button className={`cursor-pointer rounded-lg w-fit h-fit flex justify-center p-2 ml-1 my-3 text-black dark:text-orange-50 text-2xl 
                                ${option==item.title ? 
                                    "bg-orange-400 text-white dark:bg-orange-600/80 dark:text-black" 
                                    : 
                                    "hover:bg-orange-300 hover:text-white dark:hover:bg-orange-700 dark:hover:text-black"}`}
                                onClick={() => {
                                    setOption(item.title)
                                    console.log(option)
                                }}>
                                    {item.icon}
                                </button>
                                {item.title=='call' && (
                                    <hr className="text-gray-300 w-4/5 font-bold" />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="absolute bottom-0">
                    <ThemeButton />
                    <Link to="/" className="rounded-lg w-fit h-fit flex justify-center p-2 my-8">
                        <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                        className="w-12 h-12 rounded-full" />
                    </Link>
                </div>
            </div>
        </div>
    )
}