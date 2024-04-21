import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import ThemePreview from '../ThemePreview'

describe('ThemePreview', () => {
    it('should display the ThemePreview route', async () => {
        render(<ThemePreview />)
        const h1 = await screen.findByText('Heading 1')
        expect(h1).toHaveClass('MuiTypography-h1')
        /*const h2 = await screen.findByRole('heading', { level: 2, name: 'Heading 2' })
        expect(h2).toHaveClass('MuiTypography-h2')
        const h3 = await screen.findByRole('heading', { level: 3, name: 'Heading 3' })
        expect(h3).toHaveClass('MuiTypography-h3')
        const h4 = await screen.findByRole('heading', { level: 4, name: 'Heading 4' })
        expect(h4).toHaveClass('MuiTypography-h4')
        const h5 = await screen.findByRole('heading', { level: 5, name: 'Heading 5' })
        expect(h5).toHaveClass('MuiTypography-h5')
        const h6 = await screen.findByRole('heading', { level: 6, name: 'Heading 6' })
        expect(h6).toHaveClass('MuiTypography-h6')
        */
    })
})
