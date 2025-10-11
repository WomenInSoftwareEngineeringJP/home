import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render } from '@/tests/customRender'
import { screen, waitFor } from '@testing-library/react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
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

    it('should open and close the Drawer with the keyboard', async () => {
        render(<SideDrawer />)
        const user = userEvent.setup()
        const drawer = await screen.findByLabelText('drawer')
        await user.tab()

        // open drawer with enter key
        await user.keyboard('[enter]')
        expect(drawer).toBeVisible()

        // close drawer with escape key
        await user.keyboard('[escape]')
        await waitFor(() => expect(drawer).not.toBeVisible())

        // open drawer with space key
        await user.keyboard('[space]')
        expect(drawer).toBeVisible()
    })

    it.todo('should close the Drawer when clicking away', async () => {
        const user = userEvent.setup()

        render(<Box sx={{ width: 700 }}>
            <Stack direction="row">
                <Box sx={{ width: 450 }}>
                    <SideDrawer />
                </Box>
                <Box aria-label="off-drawer" sx={{ width: 250 }} />
            </Stack >
        </Box >)

        const button = await screen.findByLabelText('drawer-toggle-button')
        await user.click(button)

        const offDrawer = await screen.findByLabelText('off-drawer')
        offDrawer.click()

        const drawer = await screen.findByLabelText('drawer')

        await waitFor(() => {
            expect(drawer).not.toBeVisible()
        })
    })

    it('should close the Drawer when clicking the close icon on mobile view', async () => {
        const user = userEvent.setup()
        vi.mocked(useMediaQuery).mockReturnValue(true)

        render(<SideDrawer />)

        const button = await screen.findByLabelText('drawer-toggle-button')
        await user.click(button)

        const drawerContents = await screen.findByLabelText('drawer-contents')
        expect(drawerContents).toBeVisible()

        const closeButton = await screen.findByLabelText('close-button')
        await user.click(closeButton)

        await waitFor(() => {
            expect(drawerContents).not.toBeVisible()
        })
    })

    it('should not open when (tab/shift) keys are pressed', async () => {
        render(<SideDrawer />)

        const user = userEvent.setup()
        const drawer = await screen.findByLabelText('drawer')

        // drawer should not open with tab key
        await user.keyboard('[tab]')
        expect(drawer).not.toBeVisible()

        // drawer should not open with shift key
        await user.keyboard('[shift]')
        expect(drawer).not.toBeVisible()

        // drawer should open with enter key
        await user.keyboard('[enter]')
        expect(drawer).toBeVisible()
    })
})
