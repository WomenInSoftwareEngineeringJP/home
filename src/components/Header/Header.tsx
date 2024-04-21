import { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';



const Header: FC = () => {
    const theme = useTheme()
    let inner = (<DesktopHeader />)
    if (useMediaQuery(theme.breakpoints.down('sm'))) {
        inner = (<MobileHeader />)
    }

    return <AppBar position="static" aria-label="header">
        {inner}
    </AppBar>
}

export default Header
