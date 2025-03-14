type ShortcutsPropsTypes = {
    action: string,
    keys: string[]
}

export const shortcutsProps: ShortcutsPropsTypes[] = [
    {
        action: 'Mark as unread',
        keys: ['Cmd', 'Shift', 'U']
    },
    {
        action: 'Mute',
        keys: ['Cmd', 'Shift', 'M']
    },
    {
        action: 'Archive Chat',
        keys: ['Cmd', 'Shift', 'E']
    },
    {
        action: 'Delete Chat',
        keys: ['Cmd', 'Shift', 'D']
    },
    {
        action: 'Pin Chat',
        keys: ['Cmd', 'Shift', 'P']
    },
    {
        action: 'Search',
        keys: ['Cmd', 'F']
    },
    {
        action: 'Search Chat',
        keys: ['Cmd', 'Shift', 'F']
    },
    {
        action: 'New Chat',
        keys: ['Cmd', 'N']
    },
    {
        action: 'Next Chat',
        keys: ['Ctrl', 'Tab']
    },
    {
        action: 'Previous Chat',
        keys: ['Ctrl', 'Shift', 'Tab']
    },
    {
        action: 'New Group',
        keys: ['Cmd', 'Shift', 'N']
    },
    {
        action: 'Profile & About',
        keys: ['Cmd', 'P']
    },
    {
        action: 'Increase speed of voice message',
        keys: ['Shift', '>']
    },
    {
        action: 'Decrease speed of voice message',
        keys: ['Shift', '<']
    },
    {
        action: 'Settings',
        keys: ['Shift', '.']
    },
    {
        action: 'Emoji Panel',
        keys: ['Cmd', 'E']
    },
    {
        action: 'Sticker Panel',
        keys: ['Cmd', 'S']
    }
]