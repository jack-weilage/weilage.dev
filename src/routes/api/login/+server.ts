import type { RequestHandler } from './$types'
import { error, json } from '@sveltejs/kit'

export const POST: RequestHandler = async function({ request })
{
    let data = null
    if (request.headers.get('content-type') === 'application/json')
        data = await request.json()

    if (!data || (data && (!data.username || !data.password)))
        throw error(400, 'Invalid request body')

    let response = {
        success: false,
        message: 'Invalid username or password'
    }

    // Correct 2/3 of the time
    if (Math.random() > 0.33)
    {
        response = {
            success: true,
            message: 'Login successful',
        }
    }

    return json(response)
}