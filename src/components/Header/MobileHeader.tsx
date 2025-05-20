import { FC } from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import StyledNavLink from '@/components/StyledNavLink/StyledNavLink'
import SideDrawer from '../SideDrawer/SideDrawer'

const MobileHeader: FC = () => {
    return (
        <Toolbar
            aria-label="mobile-toolbar"
            sx={{ justifyContent: 'space-between' }}
        >
            <StyledNavLink
                to="/"
                style={{ textDecoration: 'none', color: 'white' }}
            >
                <Typography variant="h2">WiSE Japan</Typography>
                <Typography variant="caption">
                    Women in Software Engineering Japan
                </Typography>
            </StyledNavLink>
            <SideDrawer />
        </Toolbar>
    )
}

export default MobileHeader
