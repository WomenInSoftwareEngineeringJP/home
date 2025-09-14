import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import Home from '../Home'

describe('Home Route', () => {
    it('should display the Home Route', async () => {
        render(<Home />)
        const hello = await screen.findByText('✨ Hello World ✨')
        expect(hello).toBeVisible()

        const link = await screen.findByRole('link', { name: '✨ Join us on Slack ✨' })
        expect(link).toBeEnabled()
        expect(link).toHaveAttribute('href', 'https://join.slack.com/t/wise-japan/shared_invite/zt-3day0p55s-f7cx26Q3ZLw0XB34SjbKIg')
        expect(link).toHaveAttribute('target', '_blank')
    })

    it.todo('should show text in Japanese when the ja locale is set', async () => {

    })
})
