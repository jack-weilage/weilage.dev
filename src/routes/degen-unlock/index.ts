const CORRECT_PASSWORD = 'correct'

export async function post({ request }) {
    const req = await request.json() as { password: string }

    const unlocked = req.password === CORRECT_PASSWORD
    return {
        status: 200,
        body: { unlocked }
    }
}