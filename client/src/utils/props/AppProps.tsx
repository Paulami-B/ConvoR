import React from "react"
import { TitleType } from "./SideBarProps"
import ChatLayout from "../../layouts/ChatLayout"
import SettingsLayout from "../../layouts/SettingsLayout"
import StoriesLayout from "../../layouts/StoriesLayout"

type AppProps = {
    name: TitleType,
    component: React.ReactNode
}

export const appItems: AppProps[] = [
    {
        name: 'message',
        component: <ChatLayout />
    }, {
        name: 'call',
        component: <ChatLayout />
    }, {
        name: 'stories',
        component: <StoriesLayout />
    }, {
        name: 'settings',
        component: <SettingsLayout />
    }
]