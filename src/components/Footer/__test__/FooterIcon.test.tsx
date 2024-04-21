import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import FooterIcon from '../FooterIcon'

describe('FooterIcon', () => {
    it('should display the FooterIcon', async () => {
        const innerIcon = (<div>icon</div>)
        render(<FooterIcon label="my label" icon={innerIcon} href='http://example.com' />)
        const icon = await screen.findByLabelText('my label')
        expect(icon).toBeVisible()
        expect(icon).toContainHTML('<div>icon</div>')
        expect(icon).toHaveAttribute('href', 'http://example.com')
        expect(icon).toHaveAttribute('target', '_blank')
    })
})
