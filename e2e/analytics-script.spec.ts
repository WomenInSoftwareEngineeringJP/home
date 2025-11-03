import { test, expect } from '@playwright/test'


test('SA script stays single across SPA navigations', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    for (const path of ['/#/jobs', '/#/team', '/#/events', '/#/wiki', '/#/codeofconduct']) {
        await page.goto(path, { waitUntil: 'domcontentloaded' })
        await expect(page.locator('body script[src*="simpleanalyticscdn.com"]')).toHaveCount(1)
    }
})
