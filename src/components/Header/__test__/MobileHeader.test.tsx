import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import MobileHeader from '../MobileHeader'

describe('MobileHeader', () => {
    it('should display the MobileHeader', async () => {
        render(<MobileHeader />)
        const title = await screen.findByText('WiSE Japan')
        expect(title).toBeVisible()
    })
})
