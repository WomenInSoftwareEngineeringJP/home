import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import MobileToolbar from '../MobileToolbar'

describe('MobileToolbar', () => {
    it('should display the MobileToolbar', async () => {
        render(<MobileToolbar />)
        const title = await screen.findByText('Ann Kilzer')
        expect(title).toBeVisible()
    })
})
