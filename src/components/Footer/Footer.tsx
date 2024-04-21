import { FC } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation'
import Paper from '@mui/material/Paper'
import StarIcon from '@mui/icons-material/Star'
import FooterIcon from './FooterIcon';


const Footer: FC = () => {
    return <Paper sx={{ position: 'static', bottom: 0, left: 0, right: 0 }} elevation={0} aria-label="footer">
        <BottomNavigation sx={{ backgroundColor: '#512da8' }}>
            <FooterIcon label="Example Icon" icon={<StarIcon />} href="https://example.com" />
        </BottomNavigation>
    </Paper>
}

export default Footer
