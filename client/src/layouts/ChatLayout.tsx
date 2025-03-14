import Contacts from "../components/Contacts";
import ChatContainer from "../components/ChatContainer";
import { useState } from "react";
import HorizontalSideBar from "../components/HorizontalSideBar";
import { TitleType } from "../utils/props/SideBarProps";

export default function ChatLayout() {
  const [activeTab, setActiveTab] = useState<'chats' | 'chatContainer'>('chats');
    const [option, setOption] = useState<TitleType>('message')
  const [showChats, setShowChats] = useState<boolean>(false);
  const setTab = () => {
    setActiveTab(activeTab=='chats' ? 'chatContainer' : 'chats')
  }
  const handleChat = () => {
    setShowChats(!showChats);
  }
  return (
    <div className="md:grid md:grid-cols-11 divide-x divide-orange-100 dark:divide-orange-900">
        <div className={`${activeTab=='chats' ? 'block' : 'hidden'} md:block col-span-4 lg:col-span-3`}>
          <Contacts selectTab={setTab} handleChat={handleChat} />
          <HorizontalSideBar />
        </div>
        <div className={`${activeTab=='chatContainer' ? 'block' : 'hidden'} md:block col-span-7 lg:col-span-8`}>
          <ChatContainer selectTab={setTab} handleChat={handleChat} />
        </div>
    </div>
  )
}
