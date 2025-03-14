import { shortcutsProps } from "../utils/props/KeyboardShortcuts";

export default function KeyboardShortcuts() {
  return (
    <div>
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Keyboard Shortcuts</h2>
        <div className="grid grid-cols-2 gap-4">
            {shortcutsProps.map((item) => (
                <div className="col-span-1 flex justify-between my-2 gap-3">
                    <div className="text-sm dark:text-gray-100">{item.action}</div>
                    <div className="flex justify-end gap-1">
                        {item.keys.map(k => (
                            <button className='bg-gray-200 rounded p-0.5 outline outline-gray-500 w-12 text-xs'>{k}</button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
