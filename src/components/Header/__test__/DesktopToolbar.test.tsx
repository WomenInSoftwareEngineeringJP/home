import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import DesktopToolbar from '../DesktopToolbar'

describe('Header', () => {
    it('should display the DesktopToolbar', async () => {
        render(<DesktopToolbar />)
        const title = await screen.findByText('Ann Kilzer')
        expect(title).toBeVisible()
    })

    it.todo('should show navigation links')
})
