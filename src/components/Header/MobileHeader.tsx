import { FC } from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import StyledNavLink from './StyledNavLink'
import SideDrawer from '../SideDrawer/SideDrawer'

interface MobileHeaderProps {
}

const MobileHeader: FC<MobileHeaderProps> = () => {
    return <Toolbar aria-label="mobile-toolbar">
        <SideDrawer />
        <StyledNavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Typography variant="h2" component="h1">Women in Software Engineering</Typography>
        </StyledNavLink>
    </Toolbar>
}

export default MobileHeader
