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
        expect(links.length).toEqual(6)
        const baseURL = window.location.toString()
        expect(links[0]).toHaveProperty('href', baseURL)
        expect(links[1]).toHaveProperty('href', baseURL + 'team')
        expect(links[2]).toHaveProperty('href', baseURL + 'jobs')
        expect(links[3]).toHaveProperty('href', baseURL + 'events')
        expect(links[4]).toHaveProperty('href', baseURL + 'wiki')
        expect(links[5]).toHaveProperty('href', baseURL + 'codeofconduct')

    })

    it('should call closeDrawer when link is clicked', async () => {
        const closeDrawerFnMock = vi.fn(() => { })
        const user = userEvent.setup()
        vi.mocked(useMediaQuery).mockReturnValue(true)
        render(<DrawerContents closeDrawer={closeDrawerFnMock} />)

        const homeLink = screen.getByRole('link', {name: 'Home'})
        const teamLink = screen.getByRole('link', {name: 'Team'})
        const jobBoarbLink = screen.getByRole('link', {name: 'Job Board'})
        const eventsLink = screen.getByRole('link', {name: 'Events'})
        const wikiLink = screen.getByRole('link', {name: 'Wiki'})
        const codeOfConductLink = screen.getByRole('link', {name: 'Code of Conduct'})

        await user.click(homeLink)
        await user.click(teamLink)
        await user.click(jobBoarbLink)
        await user.click(eventsLink)
        await user.click(wikiLink)
        await user.click(codeOfConductLink)

        expect(closeDrawerFnMock).toHaveBeenCalledTimes(6)
    })

    it('should not call closeDrawer when language toggle is clicked', async () => {
        const closeDrawerFnMock = vi.fn(() => { })
        const user = userEvent.setup()
        vi.mocked(useMediaQuery).mockReturnValue(true)

        render(<DrawerContents closeDrawer={closeDrawerFnMock} />)

        const enButton = screen.getByRole('button', {name: 'English'})
        const jaButton = screen.getByRole('button', {name: '日本語'})

        await user.click(enButton)
        await user.click(jaButton)

        expect(closeDrawerFnMock).not.toHaveBeenCalled()
    })
})
