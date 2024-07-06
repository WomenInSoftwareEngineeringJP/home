import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import ColorSwatch from '../ColorSwatch'

describe('ColorSwatch', () => {
    it('should display a primary color swatch', async () => {
        render(<ColorSwatch color='primary' data-testid="swatch" />)
        const swatch = await screen.findByTestId('swatch')
        expect(swatch).toHaveClass('MuiPaper-root')
        expect(swatch).toHaveAttribute('color', 'primary')
        expect(swatch).toHaveStyle('background-color: rgb(106, 27, 154);')
    })

    it('should display a secondary color swatch', async () => {
        render(<ColorSwatch color='secondary' data-testid="swatch" />)
        const swatch = await screen.findByTestId('swatch')
        expect(swatch).toHaveAttribute('color', 'secondary')
        expect(swatch).toHaveStyle('background-color: rgb(2, 119, 189);')
    })

    it('should display a tertiary color swatch', async () => {
        render(<ColorSwatch color='tertiary' data-testid="swatch" />)
        const swatch = await screen.findByTestId('swatch')
        expect(swatch).toHaveStyle('background-color: rgb(0, 105, 92);')
    })

    it('should gracefully handle an unknown color', async () => {
        render(<ColorSwatch color='unknown' data-testid="swatch" />)
        const swatch = await screen.findByTestId('swatch')
        expect(swatch).toHaveStyle('background-color: rgba(0, 0, 0, 0);')
    })
})
