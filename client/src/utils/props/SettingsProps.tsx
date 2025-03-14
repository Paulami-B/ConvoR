import React from "react";
import { FaRegKeyboard } from "react-icons/fa6";
import { HiOutlineBell, HiOutlineClipboardList } from "react-icons/hi";
import { IoImagesOutline } from "react-icons/io5";
import { LuKeyRound } from "react-icons/lu";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { TbHelp } from "react-icons/tb";
import NotificationOptions from "../../components/NotificationOptions";
import PrivacyOptions from "../../components/PrivacyOptions";
import SecurityOptions from "../../components/SecurityOptions";
import AccountInfo from "../../components/AccountInfo";
import KeyboardShortcuts from "../../components/KeyboardShortcuts";
import UpdateProfile from "../../components/UpdateProfile";
import BlockedContacts from "../../components/BlockedContacts";

export type SettingType = 'Profile' | 'Notifications' | 'Privacy' | 'Blocked' | 'Security' | 'Wallpaper'| 'Request Account Info' | 'Keyboard Shortcuts' | 'Help'

type SideBarProps = {
    title: SettingType,
    icon: React.ReactNode
}

export type SettingsModal = {
  title: SettingType,
  component: React.ReactNode
}

export const settingsMenuItems: SideBarProps[] = [
      {
        title: 'Notifications',
        icon: <HiOutlineBell />
      }, {
        title: 'Privacy',
        icon: <MdOutlinePrivacyTip />
      }, {
        title: 'Security',
        icon: <LuKeyRound />
      }, {
        title: 'Wallpaper',
        icon: <IoImagesOutline />
      }, {
        title: 'Request Account Info',
        icon: <HiOutlineClipboardList />
      }, {
        title: 'Keyboard Shortcuts',
        icon: <FaRegKeyboard />
      }, {
        title: 'Help',
        icon: <TbHelp />
      }
    ];

export const settingsModal: SettingsModal[] = [
  {
    title: 'Profile',
    component: <UpdateProfile />
  }, {
    title: 'Notifications',
    component: <NotificationOptions />
  }, {
    title: 'Privacy',
    component: <PrivacyOptions />
  }, {
    title: 'Blocked',
    component: <BlockedContacts />
  }, {
    title: 'Security',
    component: <SecurityOptions />
  }, {
    title: 'Wallpaper',
    component: <IoImagesOutline />
  }, {
    title: 'Request Account Info',
    component: <AccountInfo />
  }, {
    title: 'Keyboard Shortcuts',
    component: <KeyboardShortcuts />
  }, {
    title: 'Help',
    component: <TbHelp />
  }
]