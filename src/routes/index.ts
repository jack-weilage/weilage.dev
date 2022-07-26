import type { ContactsResponse } from '$lib/types'
import type { RequestHandler } from '@sveltejs/kit/types'

const contacts: ContactsResponse = {
    email: {
        href: 'mailto:jack@weilage.dev',
        text: 'Email me',
        title: 'Send me an email',
    },
    github: {
        href: 'https://github.com/jack-weilage',
        text: 'Read my code',
        title: 'View my GitHub profile',
    },
    examples: {
        href: '/examples/',
        text: 'View examples',
        title: 'View examples',
    }
}
export const GET: RequestHandler = () => ({ body: { contacts } })