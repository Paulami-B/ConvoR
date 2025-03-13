interface IconProps{
    size: string
    text?: string
}

export default function Icon({size, text}: IconProps) {
  return (
    <div className="h-auto pb-2 flex items-center">
        <div className={`font-matemasie ${size} leading-[1.5] bg-gradient-to-r from-yellow-400 via-amber-600 to-orange-600 inline-block text-transparent bg-clip-text`}>
            {text ? text : 'C'}
        </div>
    </div>
  )
}