import React from "react"
import { TitleType } from "./SideBarProps"
import ChatLayout from "../../layouts/ChatLayout"
import SettingsLayout from "../../layouts/SettingsLayout"

type AppProps = {
    name: TitleType,
    component: React.ReactNode
}

export const appItems: AppProps[] = [
    {
        name: 'message',
        component: <ChatLayout />
    }, {
        name: 'settings',
        component: <SettingsLayout />
    }, {
        name: 'call',
        component: <ChatLayout />
    }
]