import { AiOutlineMessage } from "react-icons/ai"
import { FiPhone } from "react-icons/fi"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { LiaLinkSolid } from "react-icons/lia"
import { LuCircleDashed } from "react-icons/lu"

type SecurityProps = {
    title: string,
    icon: React.ReactNode
}

export const securityMenuItems: SecurityProps[] = [
    {
        title: 'Text and voice messages',
        icon: <AiOutlineMessage />
    }, {
        title: 'Audio & Video Calls',
        icon: <FiPhone />
    }, {
        title: 'Photos, videos & documents',
        icon: <LiaLinkSolid />
    }, {
        title: 'Location Sharing',
        icon: <HiOutlineLocationMarker />
    }, {
        title: 'Status Updates',
        icon: <LuCircleDashed />
    }
]