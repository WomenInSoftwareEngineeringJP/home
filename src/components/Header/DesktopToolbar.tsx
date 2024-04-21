import { FC } from 'react';

import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import SideDrawer from '../SideDrawer/SideDrawer';
import StyledNavLink from './StyledNavLink';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 80,
    },
}))



const DesktopHeader: FC = () => {
    return <StyledToolbar aria-label="desktop-toolbar">
        <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
            <SideDrawer />
            <StyledNavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <Typography variant="h1">Women in Software Engineering: Japan</Typography>
            </StyledNavLink>
        </Stack>
    </StyledToolbar>
}

export default DesktopHeader
