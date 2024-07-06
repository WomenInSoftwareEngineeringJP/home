import { test, expect, Locator } from '@playwright/test';

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
    expect(cards).toHaveLength(7)

    await verifyTeamMemberCard(cards[0], 'Ann Kilzer', 'Director')
    await verifyTeamMemberCard(cards[1], 'Paty Cortez', '')
    await verifyTeamMemberCard(cards[2], 'Maria Tenorio', '')
    await verifyTeamMemberCard(cards[3], 'Daria Vazhenina', 'ML & Data Science Lead')
    await verifyTeamMemberCard(cards[4], 'Krizza Bullecer', 'Lead')
    await verifyTeamMemberCard(cards[5], 'Anna Nakayama', '')
    await verifyTeamMemberCard(cards[6], 'Aidan Fournier', '')

    // verify link
    const links = await page.getByLabel('link-wrapper').all()
    expect(links).toHaveLength(1)
    const annLink = links[0]
    await expect(annLink).toBeVisible()
    await expect(annLink).toHaveRole('link')
    await expect(annLink).toHaveAttribute('href', 'https://annkilzer.net')
    await expect(annLink).toHaveAttribute('target', '_blank')
});

test('shows the team in Japanese', async ({ page }) => {
    await page.goto('/#/team')

    // switch locale to Japanese
    const hamburger = page.getByLabel('drawer-toggle-button')
    await hamburger.click()
    const japanese = page.getByLabel('drawer').getByText('日本語')
    await japanese.click()

    const teamContainer = page.getByLabel('team-container')

    // click off to close sidebar
    await teamContainer.click({ force: true });

    const heading = teamContainer.getByText('✨ リーダーシップ・チーム ✨')
    await expect(heading).toBeVisible()

    const cards = await teamContainer.getByLabel('team-member-card').all()
    expect(cards).toHaveLength(7)

    await verifyTeamMemberCard(cards[0], 'キルザー·杏', 'ディレクター')
    await verifyTeamMemberCard(cards[1], 'Paty Cortez', '')
    await verifyTeamMemberCard(cards[2], 'Maria Tenorio', '')
    await verifyTeamMemberCard(cards[3], 'バジェニナ・ダリヤ', 'ML＆データサイエンス・リード')
    await verifyTeamMemberCard(cards[4], 'ブレサー　クリザ', 'リード')
    await verifyTeamMemberCard(cards[5], 'Anna Nakayama', '')
    await verifyTeamMemberCard(cards[6], 'Aidan Fournier', '')
})
