import { FC } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation'
import Paper from '@mui/material/Paper'
import Icon from '@mui/material/Icon';
import FooterIcon from './FooterIcon';


const Footer: FC = () => {
    return <Paper sx={{ position: 'static', bottom: 0, left: 0, right: 0 }} elevation={0} aria-label="footer">
        <BottomNavigation sx={{ backgroundColor: '#DAC9A6' }}>
            <FooterIcon label="Example Icon" icon={<Icon>star</Icon>} href="https://example.com" />
        </BottomNavigation>
    </Paper>
}

export default Footer
