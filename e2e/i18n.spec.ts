import { test, expect } from '@playwright/test'

const enSentence = 'We are proud to celebrate one year as an independent, grassroots organization empowering diverse women in technology careers.'
const jaSentence = '私たちはテクノロジー業界で活躍する多様な女性に力を与える草の根組織として1周年を迎えられたことを誇りに思います。'

test.describe('Japanese Locale', () => {
    test.use({ locale: 'ja' })

    test('browser locale is auto-detected', async ({ page }) => {
        await page.goto('/')

        const jaText = page.getByText(jaSentence)
        await expect(jaText).toBeVisible()
    })

    test('manually change locales', async ({ page }) => {
        await page.goto('/')

        await page.getByLabel('drawer-toggle-button').click()
        await page.getByRole('button', { name: 'English' }).click()

        const enText = page.getByText(enSentence)
        await expect(enText).toBeVisible()
    })
})

test.describe('English Locale', () => {
    test.use({ locale: 'en' })

    test('browser locale is auto-detected', async ({ page }) => {
        await page.goto('/')

        const enText = page.getByText(enSentence)
        await expect(enText).toBeVisible()
    })

    test('manually change locales', async ({ page }) => {
        await page.goto('/')

        await page.getByLabel('drawer-toggle-button').click()
        await page.getByRole('button', { name: '日本語' }).click()

        const jaText = page.getByText(jaSentence)
        await expect(jaText).toBeVisible()
    })
})

// Some browsers use sub-variants of locales, like 'en-US' or 'en-HK'
test.describe('English US Locale', () => {
    test.use({ locale: 'en-US' })

    test('browser locale is auto-detected', async ({ page }) => {
        await page.goto('/')

        const enText = page.getByText(enSentence)
        await expect(enText).toBeVisible()
    })

    test('manually change locales', async ({ page }) => {
        await page.goto('/')

        await page.getByLabel('drawer-toggle-button').click()
        await page.getByRole('button', { name: '日本語' }).click()

        const jaText = page.getByText(jaSentence)
        await expect(jaText).toBeVisible()
    })
})
