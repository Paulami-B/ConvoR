type NotificationProps = {
    option: String,
    subtext?: String
}

export const notificationItems: NotificationProps[] = [
    {
        option: 'Notifications',
        subtext: 'Show notifications for new message'
    }, {
        option: 'Show Previews'
    }, {
        option: 'Show Reaction Notifications'
    }, {
        option: 'Incoming Call Ringtone'
    }, {
        option: 'Sounds',
        subtext: 'Play sounds for incoming messages'
    }
]