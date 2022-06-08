import type { RequestEvent, RequestHandlerOutput } from '@sveltejs/kit/types'

export async function post({ request, url }: RequestEvent): Promise<RequestHandlerOutput>
{
    let data = null
    if (request.headers.get('content-type') === 'application/json')
    {
        data = await request.json()
    }

    if (!data || (data && (!data.username || !data.password)))
    {
        return {
            status: 400,
            body: 'Invalid request body'
        }
    }

    let body = {
        success: false,
        message: 'Invalid username or password'
    }

    // Correct 2/3 of the time
    if (Math.random() > 0.33)
    {
        body = {
            success: true,
            message: 'Login successful',
        }
    }

    return { status: 200, body }
}