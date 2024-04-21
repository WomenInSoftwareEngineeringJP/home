import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import DrawerContents from '../DrawerContents'

describe('DrawerContents', () => {
    it('should display the DrawerContents', async () => {
        render(<DrawerContents />)
        const home = await screen.findByText('Coming soon!')
        expect(home).toBeVisible()
    })

    it.todo('should show the NavLinks on mobile screens')
})
