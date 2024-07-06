import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import OptionalLinkWrapper from '../OptionalLinkWrapper'


describe('OptionalLinkWrapper', () => {
    const exampleURL = 'https://example.com'

    it('should render the link when URL is set', async () => {
        render(<OptionalLinkWrapper url={exampleURL}>
            <span>child</span>
        </OptionalLinkWrapper>)

        const link = await screen.findByRole('link')
        expect(link).toHaveAttribute('href', exampleURL)

        const child = await screen.findByText('child')
        expect(child).toBeVisible()
    })

    it.each(['', undefined])('should render the child component when URL is %i', async (url: string | undefined) => {
        render(<OptionalLinkWrapper url={url}>
            <span>child</span>
        </OptionalLinkWrapper>)

        const child = await screen.findByText('child')
        expect(child).toBeVisible()

        const link = screen.queryByRole('link')
        expect(link).toBeNull()
    })
})
