import { describe, it } from 'vitest'
import { render } from '@/tests/customRender'
import DrawerContents from '../DrawerContents'

describe('DrawerContents', () => {
    it('should display the DrawerContents', async () => {
        render(<DrawerContents />)
        // todo
    })

    it.todo('should show the NavLinks on mobile screens')
})
