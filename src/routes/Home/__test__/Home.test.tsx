import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import Home from '../Home'

describe('Home Route', () => {
    it('should display the Home Route', async () => {
        render(<Home />)
        const hello = await screen.findByText('Welcome to our Website')
        expect(hello).toBeVisible()
    })

})
