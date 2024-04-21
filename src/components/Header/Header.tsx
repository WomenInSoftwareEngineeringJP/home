import { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileToolbar from './MobileToolbar';
import DesktopToolbar from './DesktopToolbar';



const Header: FC = () => {
    const theme = useTheme()
    let inner = (<DesktopToolbar />)
    if (useMediaQuery(theme.breakpoints.down('sm'))) {
        inner = (<MobileToolbar />)
    }

    return <AppBar position="static" aria-label="header">
        {inner}
    </AppBar>
}

export default Header
