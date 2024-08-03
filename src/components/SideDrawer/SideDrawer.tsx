import { FC, useState } from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import IconButton from '@mui/material/IconButton'
import DrawerContents from './DrawerContents'
import MenuIcon from '@mui/icons-material/Menu'


const SideDrawer: FC = () => {
    const [open, setOpen] = useState(false)

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return
                }

                setOpen(open)
            }

    return <>
        <IconButton
            sx={{ color: 'white' }}
            onClick={() => { setOpen(true) }}
            aria-label="drawer-toggle-button"
        >
            <MenuIcon />
        </IconButton>
        <SwipeableDrawer
            open={open}
            onOpen={toggleDrawer(true)}
            onClose={toggleDrawer(false)}
            aria-label="drawer"
        >
            <DrawerContents closeDrawer={() => { setOpen(false) }} />
        </SwipeableDrawer>
    </>
}

export default SideDrawer
