import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
    await page.goto('/')

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/WiSE/)
})

test.describe('mobile viewport', () => {
    test.use({ viewport: { width: 400, height: 800 } })

    test('should close drawer when a list item is selected on mobile', async ({ page }) => {
        await page.goto('/')

        const hamburger = page.getByLabel('drawer-toggle-button')
        await hamburger.click()
        const drawer = page.getByLabel('drawer')
        const events = drawer.getByText('Events')

        await events.click()

        await expect(events).not.toBeVisible()
        const eventsContainer = page.getByLabel('events-container')
        const heading = eventsContainer.getByRole('heading', { name: 'Events', exact: true })
        await expect(heading).toBeVisible()
    })
})
