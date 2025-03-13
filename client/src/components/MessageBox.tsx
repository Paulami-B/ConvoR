import { useRef, useState } from 'react'
import { GrEmoji } from 'react-icons/gr'
import { LiaLinkSolid } from 'react-icons/lia'
import { MdSend } from 'react-icons/md'
import useAutosizeTextArea from '../utils/customHook';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useThemeStore } from '../utils/slices/themeSlice';
import { AiFillFileAdd } from 'react-icons/ai';

export default function MessageBox() {
    const [content, setContent] = useState('');
    const [showEmojis, setShowEmojis] = useState<boolean>(false);
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const {theme} = useThemeStore();
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useAutosizeTextArea(textAreaRef.current, content);
    function handleEmojiClick(emoji:any) {
        const input = textAreaRef.current;
    
        if (input) {
          const selectionStart = input.selectionStart;
          const selectionEnd = input.selectionEnd;
    
          setContent(
            content.substring(0, selectionStart) +
              emoji +
              content.substring(selectionEnd)
          );
          // Move the cursor to the end of the inserted emoji
          input.selectionStart = input.selectionEnd = selectionStart + 1;
        }
    }
    return (
        <div className="w-full h-fit flex justify-between items-center gap-3 p-3 border-t border-gray-100 dark:border-orange-900 bg-white dark:bg-gray-800">
            <div className="relative w-full flex items-center bg-orange-50 dark:bg-gray-700/60 p-2 gap-3 rounded-lg">
                <LiaLinkSolid strokeWidth={0.6} className="text-3xl text-orange-400 cursor-pointer" onClick={() => setShowOptions(!showOptions)} />
                {showOptions && (
                    <div className='absolute bottom-16 left-3'>
                        <div className='my-6 p-3 rounded-full bg-sky-100'>
                            <AiFillFileAdd className='cursor-pointer' size={35} />
                        </div>
                        <div className='my-6 p-3 rounded-full bg-sky-100'>
                            <AiFillFileAdd className='cursor-pointer' size={35} />
                        </div>
                        <div className='my-6 p-3 rounded-full bg-sky-100'>
                            <AiFillFileAdd className='cursor-pointer' size={35} />
                        </div>
                    </div>
                )}
                <textarea className="outline-none focus:outline-none focus:ring-0 w-full h-fit rounded-lg placeholder-orange-400 dark:text-white" 
                placeholder="Message..."
                rows={1} ref={textAreaRef} value={content}
                onChange={(e) => setContent(e.target.value)} />
                <GrEmoji strokeWidth={0.8} className="text-3xl text-orange-400 cursor-pointer" onClick={() => setShowEmojis(!showEmojis)} />
                {showEmojis && (
                    <div className='absolute bottom-16 right-3'>
                        <Picker data={data} theme={theme} onEmojiSelect={(emoji: any) => {
                            handleEmojiClick(emoji.native)
                        }} />
                    </div>
                )}
            </div>
            <button className="h-fit w-fit p-2 bg-orange-300 dark:bg-orange-700 hover:bg-orange-400 dark:hover:bg-orange-600 text-white dark:text-black hover:text-black  rounded-lg cursor-pointer">
                <MdSend className="text-3xl" />
            </button>
        </div>
    )
}
