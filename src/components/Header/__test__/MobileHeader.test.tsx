import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import MobileHeader from '../MobileHeader'

describe('MobileHeader', () => {
    it('should display the MobileHeader', async () => {
        render(<MobileHeader />)
        const title = await screen.findByText('Women in Software Engineering')
        expect(title).toBeVisible()
    })
})
