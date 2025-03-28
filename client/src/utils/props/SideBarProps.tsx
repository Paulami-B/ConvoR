import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import { LuCircleDashed } from "react-icons/lu";
import { TbSettings } from "react-icons/tb";

export type TitleType = 'message' | 'groups' | 'stories' | 'call' | 'settings'

type SideBarProps = {
    title: TitleType,
    icon: React.ReactNode
}

export const sidebarMenuItems: SideBarProps[] = [
    {
        title: 'message',
        icon: <AiOutlineMessage strokeWidth={5} className="text-2xl" />
    }, {
        title: 'groups',
        icon: <GrGroup className="text-2xl" />
    }, {
        title: 'stories',
        icon: <LuCircleDashed strokeWidth={2.5} />
    }, {
        title: 'call',
        icon: <FiPhone className="text-2xl" />
    }, {
        title: 'settings',
        icon: <TbSettings className="text-2xl" />
    }
];