import { FC, useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import DrawerContents from './DrawerContents';
import MenuIcon from '@mui/icons-material/Menu';

const SideDrawer: FC = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(!open);

    return (
        <>
            <IconButton
                sx={{ color: 'white' }}
                onClick={toggleDrawer}
                aria-label="drawer-toggle-button"
            >
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                open={open}
                onOpen={toggleDrawer}
                onClose={toggleDrawer}
                aria-label="drawer"
            >
                <DrawerContents />
            </SwipeableDrawer>
        </>
    );
};

export default SideDrawer;
