type PrivacyProps = {
    option: string,
    subtext: string
}

export const privacyItems: PrivacyProps[] = [
    {
        option: 'Last Seen',
        subtext: 'Everyone'
    }, {
        option: 'Profile Photo',
        subtext: 'Everyone'
    }, {
        option: 'About',
        subtext: 'Everyone'
    }, {
        option: 'Read Receipts',
        subtext: 'If turned off, you won\'t send or receive read receipts. Read receipts are always sent for group chats'
    }, {
        option: 'Groups',
        subtext: 'Everyone'
    }, {
        option: 'Blocked Contacts',
        subtext: '9'
    }
]