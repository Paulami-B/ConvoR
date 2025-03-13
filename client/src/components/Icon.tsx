interface IconProps{
  size: string
  text?: string
  classProps?: string
}

export default function Icon({size, text, classProps}: IconProps) {
return (
  <div className="h-auto pb-2 flex items-center">
      <div className={`${classProps} font-matemasie ${size} leading-[1.5] bg-gradient-to-r from-yellow-400 via-amber-600 to-orange-600 dark:from-yellow-200 dark:via-amber-400 dark:to-orange-400 inline-block text-transparent bg-clip-text mr-3`}>
          {text ? text : 'C'}
      </div>
  </div>
)
}