import { FC } from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import StyledNavLink from '@/components/StyledNavLink/StyledNavLink'
import SideDrawer from '../SideDrawer/SideDrawer'

const MobileHeader: FC = () => {
    return <Toolbar aria-label="mobile-toolbar">
        <SideDrawer />
        <StyledNavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Typography variant="h2">WiSE Japan</Typography>
            <Typography variant="caption">Women in Software Engineering Japan</Typography>
        </StyledNavLink>
    </Toolbar>
}

export default MobileHeader
