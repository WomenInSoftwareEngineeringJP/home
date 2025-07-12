import { test, expect } from '@playwright/test'

const pages = [
    '/',
    '/#/jobs'
]

for (const path of pages) {
    test(`simple analytics script present on ${path}`, async ({ page }) => {
        await page.goto(path)

        const script = page.locator('body script[src*="simpleanalyticscdn.com"]')
        await expect(script).toHaveCount(1)
    })
}