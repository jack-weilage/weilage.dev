import type { RequestHandler } from '@sveltejs/kit/types'
export const get: RequestHandler = async function()
{
    interface Contact {
        href:  string
        text:  string
        title: string
    }
    const contacts: Record<string, Contact> = {
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
        },
    }
    
    let body = JSON.stringify(contacts)

    return { status: 200, body }
}