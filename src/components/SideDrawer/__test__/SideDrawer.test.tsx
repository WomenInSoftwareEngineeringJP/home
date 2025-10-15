import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render } from '@/tests/customRender'
import { screen, waitFor } from '@testing-library/react'
import SideDrawer from '../SideDrawer'
import userEvent from '@testing-library/user-event'
import useMediaQuery from '@mui/material/useMediaQuery'

vi.mock('@mui/material/useMediaQuery', () => {
    return {
        default: vi.fn()
    }
})

beforeEach(() => {
    vi.resetAllMocks()
})

describe('SideDrawer', () => {
    it('should initially render the Drawer closed', async () => {
        render(<SideDrawer />)
        const drawer = await screen.findByLabelText('drawer')
        expect(drawer).not.toBeVisible()
    })

    it('should open the Drawer on click', async () => {
        render(<SideDrawer />)
        const button = await screen.findByLabelText('drawer-toggle-button')

        const user = userEvent.setup()
        await user.click(button)

        const drawer = await screen.findByLabelText('drawer')
        expect(drawer).toBeVisible()
    })

    it('should open drawer with the keyboard and close with the keyboard', async () => {
        render(<SideDrawer />)

        // Tab to move focus to the hamburger menu button
        const toggleButton = await screen.findByLabelText('drawer-toggle-button')

        const user = userEvent.setup()
        await user.tab()

        // Verify the hamburger button is focused
        await waitFor(() => {
            expect(toggleButton).toHaveFocus()
        })

        // open drawer with enter key
        const drawer = await screen.findByLabelText('drawer')
        await user.keyboard('{Enter}')
        expect(drawer).toBeVisible()

        // close drawer with escape key
        await user.keyboard('{Escape}')
        await waitFor(() => expect(drawer).not.toBeVisible())
    })



    it('should close the Drawer when clicking the backdrop', async () => {
        const user = userEvent.setup()
        render(<SideDrawer />)

        // open the drawer
        const button = await screen.findByLabelText('drawer-toggle-button')
        await user.click(button)

        const drawer = await screen.findByLabelText('drawer')
        expect(drawer).toBeVisible()

        // click on the MUI backdrop
        const backdrop = document.querySelector('.MuiBackdrop-root')
        expect(backdrop).toBeInTheDocument()

        // click the backdrop to close the drawer
        await user.click(backdrop as Element)

        await waitFor(() => {
            expect(drawer).not.toBeVisible()
        })
    })

    it('should not open when (tab/shift) keys are pressed', async () => {
        render(<SideDrawer />)

        const user = userEvent.setup()
        const drawer = await screen.findByLabelText('drawer')

        // drawer should not open with tab key
        await user.keyboard('{Tab}')
        expect(drawer).not.toBeVisible()

        // drawer should not open with shift key
        await user.keyboard('{Shift}')
        expect(drawer).not.toBeVisible()
    })

    it('should not show navigation links on desktop view', async () => {
        const user = userEvent.setup()
        render(<SideDrawer />)

        const button = await screen.findByLabelText('drawer-toggle-button')
        await user.click(button)

        // Should only have LocaleToggle links, not nav links
        const navLinks = screen.queryAllByRole('link')
        expect(navLinks.length).toBeLessThan(4) // Only LocaleToggle
    })

    // --- Mobile viewport interactions ----
    // Close icon is visible and closes drawer on mobile view
    it('should close the Drawer when clicking the close icon on mobile view', async () => {
        const user = userEvent.setup()
        vi.mocked(useMediaQuery).mockReturnValue(true) // Mobile

        render(<SideDrawer />)

        const button = await screen.findByLabelText('drawer-toggle-button')
        await user.click(button)

        const drawerContents = await screen.findByLabelText('drawer-contents')
        expect(drawerContents).toBeVisible()

        const closeButton = await screen.findByLabelText('close-button')
        expect(closeButton).toBeVisible()

        await user.click(closeButton)

        await waitFor(() => {
            expect(drawerContents).not.toBeVisible()
        })
    })

    // Test NavLinks are visible and navigates to the correct page
    it('should display navigation links on mobile view', async () => {
        const user = userEvent.setup()
        vi.mocked(useMediaQuery).mockReturnValue(true) // Mobile

        render(<SideDrawer />)
        const button = await screen.findByLabelText('drawer-toggle-button')
        await user.click(button)

        // Test that links are visible and have correct hrefs
        const navLinks = await screen.findAllByRole('link')
        expect(navLinks.length).toEqual(4)

        // Verify each link has correct href
        expect(navLinks[0]).toHaveAttribute('href', '/')
        expect(navLinks[1]).toHaveAttribute('href', '/team')
        expect(navLinks[2]).toHaveAttribute('href', '/jobs')
        expect(navLinks[3]).toHaveAttribute('href', '/codeofconduct')
        // no need to test actual navigation as it's out of scope for this test
    })
})
