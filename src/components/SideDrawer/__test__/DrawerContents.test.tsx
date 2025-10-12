import { describe, expect, it, vi } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import DrawerContents from '../DrawerContents'
import userEvent from '@testing-library/user-event'
import useMediaQuery from '@mui/material/useMediaQuery'

vi.mock('@mui/material/useMediaQuery', () => {
    return {
        default: vi.fn()
    }
})

describe('DrawerContents', () => {
    it('should display the DrawerContents', async () => {
        render(<DrawerContents closeDrawer={() => { }} />)
        const japanese = await screen.findByText('日本語')
        expect(japanese).toBeVisible()
    })

    it('should call closeDrawer when clicking x on mobile viewport', async () => {
        const mock = vi.fn(() => { })
        const user = userEvent.setup()
        vi.mocked(useMediaQuery).mockReturnValue(true)

        render(<DrawerContents closeDrawer={mock} />)
        const closeButton = await screen.findByLabelText('close-button')
        await user.click(closeButton)

        expect(mock).toHaveBeenCalled()
    })

    it('should show the NavLinks on mobile screens', async () => {
        render(<DrawerContents closeDrawer={() => { }} />)

        const links = await screen.findAllByRole('link')
        expect(links.length).toEqual(5)
        const baseURL = window.location.toString()
        expect(links[0]).toHaveProperty('href', baseURL)
        expect(links[1]).toHaveProperty('href', baseURL + 'team')
        expect(links[2]).toHaveProperty('href', baseURL + 'jobs')
        expect(links[3]).toHaveProperty('href', baseURL + 'events')
        expect(links[4]).toHaveProperty('href', baseURL + 'codeofconduct')

    })
})
