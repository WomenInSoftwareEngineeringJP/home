import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import Wiki from '../Wiki'

describe('Wiki', () => {
    it('should render the Wiki page', async () => {
        render(<Wiki />)
        const title = await screen.findByText('📚 Wiki')
        expect(title).toBeVisible()
        const iframeElement = screen.getByTitle('Women in Software Engineering Japan Public Wiki on Notion')
        expect(iframeElement).toBeVisible()
        expect(iframeElement).toHaveAttribute('src', 'https://women-in-software.notion.site/ebd/Women-in-Software-Engineering-JP-Public-Wiki-d2c50cd1917c4771a1c80280e1736b19')
    })
})
