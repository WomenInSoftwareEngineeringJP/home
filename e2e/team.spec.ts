import { test, expect, Locator } from '@playwright/test'

/** Verifies visibility of the name, title, and photo
 *
 * @param card The Locator for the TeamMember Card
 * @param name The name to find
 * @param title The title to find, if defined
 */
async function verifyTeamMemberCard(card: Locator, name: string, title?: string) {
    await expect(card.getByText(name)).toBeVisible()
    if (title) {
        await expect(card.getByText(title)).toBeVisible()
    }
    const photo = card.getByRole('img').first()
    await expect(photo).toBeVisible()
    await expect(photo).toHaveAttribute('alt-text', `${name} photo`)
}

test('shows the team in English', async ({ page }) => {
    await page.goto('/#/team')

    const teamContainer = page.getByLabel('team-container')

    const heading = teamContainer.getByText('✨ Leadership Team ✨')
    await expect(heading).toBeVisible()

    const cards = await teamContainer.getByLabel('team-member-card').all()
    expect(cards).toHaveLength(8)

    await verifyTeamMemberCard(cards[0], 'Ann Kilzer', 'Director')
    await verifyTeamMemberCard(cards[1], 'Paty Cortez', 'Director')
    await verifyTeamMemberCard(cards[2], 'Maria Tenorio', 'Lead')
    await verifyTeamMemberCard(cards[3], 'Daria Vazhenina', 'ML & Data Science Lead')
    await verifyTeamMemberCard(cards[4], 'Ania Nakayama', 'Lead')
    await verifyTeamMemberCard(cards[5], 'Rossella Ferrandino', 'Lead')
    await verifyTeamMemberCard(cards[6], 'Krizza Bullecer', 'Legacy Lead')
    await verifyTeamMemberCard(cards[7], 'Aidan Fournier', 'Legacy Lead')

    // verify link
    const links = await page.getByLabel('link-wrapper').all()
    expect(links).toHaveLength(2)
    const annLink = links[0]
    const rossLink = links[1]
    await expect(annLink).toBeVisible()
    await expect(annLink).toHaveRole('link')
    await expect(annLink).toHaveAttribute('href', 'https://annkilzer.net')
    await expect(annLink).toHaveAttribute('target', '_blank')
    await expect(rossLink).toBeVisible()
    await expect(rossLink).toHaveRole('link')
    await expect(rossLink).toHaveAttribute('href', 'https://www.rossellaferrandino.info/')
    await expect(rossLink).toHaveAttribute('target', '_blank')
})

test('shows the team in Japanese', async ({ page, viewport }) => {
    await page.goto('/#/team')

    // switch locale to Japanese
    const hamburger = page.getByLabel('drawer-toggle-button')
    await hamburger.click()
    const japanese = page.getByLabel('drawer').getByText('日本語')
    await japanese.click()

    const teamContainer = page.getByLabel('team-container')

    // close the sidebar
    if (viewport && viewport.width < 600) {
        const closeButton = page.getByLabel('close-button')
        await closeButton.click()
    } else {
        await teamContainer.click({ force: true })
    }

    const heading = teamContainer.getByText('✨ リーダーシップチーム ✨')
    await expect(heading).toBeVisible()

    const cards = await teamContainer.getByLabel('team-member-card').all()
    expect(cards).toHaveLength(8)

    await verifyTeamMemberCard(cards[0], 'キルザー·杏', 'ディレクター')
    await verifyTeamMemberCard(cards[1], 'Paty Cortez', 'ディレクター')
    await verifyTeamMemberCard(cards[2], 'Maria Tenorio', 'リード')
    await verifyTeamMemberCard(cards[3], 'バジェニナ・ダリヤ', 'ML＆データサイエンス・リード')
    await verifyTeamMemberCard(cards[4], 'Ania Nakayama', 'リード')
    await verifyTeamMemberCard(cards[5], 'フェッランディノ・ロッセッラ', 'リード')
    await verifyTeamMemberCard(cards[6], 'ブレサー　クリザ', 'レガシー・リード')
    await verifyTeamMemberCard(cards[7], 'エイデン・フォニエ', 'レガシー・リード')
})
