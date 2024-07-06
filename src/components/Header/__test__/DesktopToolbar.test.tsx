import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import DesktopHeader from '../DesktopHeader'

describe('Header', () => {
    it('should display the DesktopHeader', async () => {
        render(<DesktopHeader />)
        const title = await screen.findByText('WiSE Japan')
        expect(title).toBeVisible()
    })

    it.todo('should show navigation links')
})
