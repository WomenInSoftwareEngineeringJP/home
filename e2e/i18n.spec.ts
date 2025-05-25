import { test, expect } from '@playwright/test'

test.describe('Japanese Locale', () => {
    test.use({ locale: 'ja' })

    test('browser locale is auto-detected', async ({ page }) => {
        await page.goto('/')

        const jaText = page.getByText('私たちはテクノロジー業界で活躍する多様な女性に力を与える草の根組織として1周年を迎えられたことを誇りに思います。')
        await expect(jaText).toBeVisible()
    })
})

test.describe('English Locale', () => {
    test.use({ locale: 'en' })

    test('browser locale is auto-detected', async ({ page }) => {
        await page.goto('/')

        const enText = page.getByText('We are proud to celebrate one year as an independent, grassroots organization empowering diverse women in technology careers.')
        await expect(enText).toBeVisible()
    })
})

test.describe('English US Locale', () => {
    test.use({ locale: 'en-US' })

    test('browser locale is auto-detected', async ({ page }) => {
        await page.goto('/')

        const enText = page.getByText('We are proud to celebrate one year as an independent, grassroots organization empowering diverse women in technology careers.')
        await expect(enText).toBeVisible()
    })
})
