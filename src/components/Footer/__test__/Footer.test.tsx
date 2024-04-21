import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
    it('should display the Footer with relevant links', async () => {
        render(<Footer />)
        const icon = await screen.findByLabelText('Example Icon')
        expect(icon).toBeVisible()
    })

})
