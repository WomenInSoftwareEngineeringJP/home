import { test, expect } from '@playwright/test';

test('shows the team', async ({ page }) => {
    await page.goto('/#/team')

    const teamContainer = page.getByLabel('team-container')

    const heading = teamContainer.getByText('✨ Leadership Team ✨')
    await expect(heading).toBeVisible()

    const cards = await teamContainer.getByLabel('team-member-card').all()
    expect(cards).toHaveLength(7)
    const ann = cards[0]
    await expect(ann.getByText('Ann Kilzer')).toBeVisible()
    await expect(ann.getByText('Director')).toBeVisible()
    const annPhoto = ann.getByRole('img').first()
    await expect(annPhoto).toBeVisible()
    await expect(annPhoto).toHaveAttribute('alt-text', 'Ann Kilzer photo')

    // verify links
    const links = await page.getByLabel('link-wrapper').all()
    expect(links).toHaveLength(1)
    const annLink = links[0]
    await expect(annLink).toBeVisible()
    await expect(annLink).toHaveRole('link')
    await expect(annLink).toHaveAttribute('href', 'https://annkilzer.net')
    await expect(annLink).toHaveAttribute('target', '_blank')
});
