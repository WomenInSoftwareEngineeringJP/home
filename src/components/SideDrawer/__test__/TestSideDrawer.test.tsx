import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen, waitFor } from '@testing-library/react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import SideDrawer from '../SideDrawer'
import userEvent from '@testing-library/user-event'

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
        await user.tab()
        await user.keyboard('[enter]')

        const drawer = await screen.findByLabelText('drawer')
        expect(drawer).toBeVisible()

        //await user.keyboard('[esc]')
        //expect(drawer).not.toBeVisible()
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
})
