import { useEffect } from 'react'
import { useThemeStore } from '../utils/slices/themeSlice';
import { FiSun } from 'react-icons/fi';
import { BsMoonStars } from 'react-icons/bs';

export default function ThemeButton() {
    const { theme, toggleTheme } = useThemeStore();
    useEffect(() => {
        if(theme=='dark'){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);
    
    return (
        <button 
        className="rounded-lg w-fit h-fit flex justify-center p-2 ml-3 md:my-8 cursor-pointer hover:bg-orange-300 hover:text-white dark:hover:bg-orange-700 dark:hover:text-black text-black dark:text-orange-50 text-2xl" 
        onClick={toggleTheme}>
            {theme=="light" ? (
                <BsMoonStars strokeWidth={0.4} />
            ) : (
                <FiSun strokeWidth={2.5} />
            )}
        </button>
    )
}