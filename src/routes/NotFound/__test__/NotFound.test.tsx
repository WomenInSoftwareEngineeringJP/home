import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import NotFound from '../NotFound'

describe('NotFound', () => {
    it('should display the NotFound route', async () => {
        render(<NotFound />)
        const notFound = await screen.findByText('404: Not Found!')
        expect(notFound).toBeVisible()
        const goHome = await screen.findByRole('link', { name: 'Go back home' })
        expect(goHome).toBeVisible()
        expect(goHome).toHaveAttribute('href', '/')
    })
})
