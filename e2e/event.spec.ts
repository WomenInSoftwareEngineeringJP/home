import { test, expect, Locator } from '@playwright/test'

test('shows the events in English', async ({ page }) => {
    await page.goto('/#/events')

    const eventsContainer = page.getByLabel('events-container')

    const heading = eventsContainer.getByRole('heading', { name: 'Events' })
    await expect(heading).toBeVisible()

    const cards = await eventsContainer.getByLabel('event-card').all()
    expect(cards.length).toBeGreaterThan(0)

    // verify link to connpass page
    const connpassLink = eventsContainer.getByText('Upcoming events')
    await expect(connpassLink).toBeVisible()
    await expect(connpassLink).toHaveAttribute('href', 'https://womeninsoftware-japan.connpass.com/event/')

    // verify the sponsoring part
    const sponsoringHeading = eventsContainer.getByText('Interested in sponsoring an event?')
    await expect(sponsoringHeading).toBeVisible()

    const notionIframe: Locator = eventsContainer.locator('iframe')
    await expect(notionIframe).toHaveAttribute('src', 'https://women-in-software.notion.site/ebd/61cb6a1a3b93470687ca1f6c2628da1b')
})

test('shows the events in Japanese', async ({ page, viewport }) => {
    await page.goto('/#/events')

    // switch locale to Japanese
    const hamburger = page.getByLabel('drawer-toggle-button')
    await hamburger.click()
    const japanese = page.getByLabel('drawer').getByText('日本語')
    await japanese.click()

    const eventsContainer = page.getByLabel('events-container')

    // close the sidebar
    if (viewport && viewport.width < 600) {
        const closeButton = page.getByLabel('close-button')
        await closeButton.click()
    } else {
        await eventsContainer.click({ force: true })
    }


    const heading = eventsContainer.getByRole('heading', { name: 'イベント', exact: true })
    await expect(heading).toBeVisible()

    const cards = await eventsContainer.getByLabel('event-card').all()
    expect(cards.length).toBeGreaterThan(0)

    // verify link to connpass page
    const connpassLink = eventsContainer.getByText('今後のイベント')
    await expect(connpassLink).toBeVisible()
    await expect(connpassLink).toHaveAttribute('href', 'https://womeninsoftware-japan.connpass.com/event/')

    // verify the sponsoring part
    const sponsoringHeading = eventsContainer.getByText('イベントのスポンサーに興味がありますか？')
    await expect(sponsoringHeading).toBeVisible()

    const notionIframe: Locator = eventsContainer.locator('iframe')
    await expect(notionIframe).toHaveAttribute('src', 'https://women-in-software.notion.site/ebd/61cb6a1a3b93470687ca1f6c2628da1b')
})
