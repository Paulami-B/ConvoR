type AuthButtonProps = {
    label: string
}

export default function AuthButton({label}: AuthButtonProps) {
    return (
        <button className=" w-full my-1 p-2 lg:my-3 lg:p-3 bg-gradient-to-r 
        hover:bg-gradient-to-l from-yellow-400 via-amber-600 to-orange-600
        rounded-lg lg:text-xl font-bold cursor-pointer text-white">
                {label}
        </button>
    )
}