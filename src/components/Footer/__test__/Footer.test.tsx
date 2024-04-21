import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
    it('should display the Footer with relevant links', async () => {
        render(<Footer />)
        const instagram = await screen.findByLabelText('Personal Instagram')
        expect(instagram).toBeVisible()
        const artInstagram = await screen.findByLabelText('Art Instagram')
        expect(artInstagram).toBeVisible()
        const linkedIn = await screen.findByLabelText('LinkedIn')
        expect(linkedIn).toBeVisible()
        const gitHub = await screen.findByLabelText('GitHub')
        expect(gitHub).toBeVisible()
    })

})
