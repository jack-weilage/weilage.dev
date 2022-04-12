const shell = require('shelljs')

describe.only('dev', () => {
    beforeAll(() => new Promise((resolve, reject) => {
        // kill all processes on port 3000
        shell.exec('kill $(lsof -t -i:3000)', { silent: true })
        // build the website
        shell.exec('pnpm build', { silent: true })
        // start the server
        const server = shell.exec('pnpm preview', { async: true, silent: true })

        server.stdout.on('data', (data) => {
            if (data.includes('localhost')) resolve(1)
            if (data.includes('is occupied')) reject(1)
        })
    }))

    describe('/', () => {
        beforeAll(async () => await page.goto('http://localhost:3000/'))

        it('should have a correct title', async () => {
            expect(await page.title()).toBe('Home - Jack Weilage')
        })
    })
})
describe('prod', () => {
    describe('/', () => {
        beforeAll(async () => await page.goto('https://weilage.dev/'))

        it('should have a correct title', async () => {
            expect(await page.title()).toBe('Home - Jack Weilage')
        })
        it('should have a skip link', async () => {
            expect(await page.$('a[href="#main-content"]')).toBeTruthy()
        })
        it('should have a main content', async () => {
            expect(await page.$('main#main-content')).toBeTruthy()
        })
        it('should have only one h1', async () => {
            expect(await page.$$('h1')).toHaveLength(1)
        })
        it('should have a h1 with the correct text', async () => {
            expect(await page.$eval('h1', el => el.innerHTML)).toBe('Jack&nbsp;Weilage')
        })
        it('should have an aside in the main content', async () => {
            expect(await page.$('main > aside')).toBeTruthy()   
        })
    })
})