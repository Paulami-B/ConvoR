import { Link } from "react-router-dom";
import { sidebarMenuItems } from "../utils/props/SideBarProps";
import ThemeButton from "./ThemeButton";
import { SideBarPropsTypes } from "./VerticalSideBar";

export default function HorizontalSideBar({option, setOption}: SideBarPropsTypes) {
    return (
        <div className="block md:hidden w-screen bottom-0 sticky bg-orange-50 dark:bg-[#601B00] dark:shadow-orange-200 p-2">
            <ul className="w-full flex justify-evenly items-center">
                {sidebarMenuItems.map((item) =>(
                    <li key={item.title}>
                        <Link to="/" className={`rounded-lg w-fit h-fit flex justify-center p-2 text-black dark:text-orange-50 text-2xl 
                        ${option==item.title ? 
                            "bg-orange-400 text-white dark:bg-orange-600/80 dark:text-black" 
                            : 
                            "hover:bg-orange-300 hover:text-white dark:hover:bg-orange-700 dark:hover:text-black"}`}
                        onClick={() => setOption(item.title)}>
                        {item.icon}
                        </Link>
                    </li>
                ))}
                <li><ThemeButton /></li>
                <li>
                    <Link to="/" className="rounded-lg w-fit h-fit flex justify-center">
                        <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                        className="w-12 h-12 rounded-full" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}
