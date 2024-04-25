import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
    it('should display the Footer with relevant links', async () => {
        render(<Footer />)
        const instagram = await screen.findByLabelText('Instagram')
        expect(instagram).toBeVisible()
        expect(instagram).toHaveAttribute('href', 'https://www.instagram.com/womeninsoftwarejp/')
        const linkedIn = await screen.findByLabelText('LinkedIn')
        expect(linkedIn).toBeVisible()
        expect(linkedIn).toHaveAttribute('href', 'https://www.linkedin.com/company/womeninsoftwarejp/')
        const facebook = await screen.findByLabelText('Facebook')
        expect(facebook).toBeVisible()
        expect(facebook).toHaveAttribute('href', 'https://www.facebook.com/womeninsoftwarejp/')
        const github = await screen.findByLabelText('GitHub')
        expect(github).toBeVisible()
        expect(github).toHaveAttribute('href', 'https://github.com/WomenInSoftwareEngineeringJP')
    })

})
