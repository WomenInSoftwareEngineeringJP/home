import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
    it('should display the Header in desktop mode on wide screens', async () => {
        render(<Header />)
        const title = await screen.findByText('Ann Kilzer')
        expect(title).toBeVisible()
        const toolbar = await screen.findByLabelText('desktop-toolbar')
        expect(toolbar).toBeVisible()
    })
})
