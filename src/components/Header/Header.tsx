import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

const Header: FC = () => {
    const theme = useTheme();

    return (
        <AppBar position="static" aria-label="header">
            {useMediaQuery(theme.breakpoints.down('sm')) ? (
                <MobileHeader />
            ) : (
                <DesktopHeader />
            )}
        </AppBar>
    );
};

export default Header;
