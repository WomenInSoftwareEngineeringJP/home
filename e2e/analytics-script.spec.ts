import { test, expect } from '@playwright/test'


test('SA script stays single across SPA navigations', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    const pages = [
        '/',
        '/#/jobs',
        '/#/team',
        '/#/events',
        '/#/wiki',
        '/#/codeofconduct'
    ]

    for (const path of pages) {
        await page.goto(path, { waitUntil: 'domcontentloaded' })
        await expect(page.locator('body script[src*="simpleanalyticscdn.com"]')).toHaveCount(1)
    }
})
