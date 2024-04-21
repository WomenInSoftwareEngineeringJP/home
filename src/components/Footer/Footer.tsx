import { FC } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation'
import Paper from '@mui/material/Paper'
import { Github, Instagram, Linkedin, Palette } from 'iconoir-react';
import FooterIcon from './FooterIcon';


const Footer: FC = () => {
    return <Paper sx={{ position: 'static', bottom: 0, left: 0, right: 0 }} elevation={0} aria-label="footer">
        <BottomNavigation sx={{ backgroundColor: '#DAC9A6' }}>
            <FooterIcon label="Personal Instagram" icon={<Instagram />} href="https://www.instagram.com/cat_bacon/" />
            <FooterIcon label="Art Instagram" icon={<Palette />} href="https://www.instagram.com/ann.kilzer.art/" />
            <FooterIcon label="LinkedIn" icon={<Linkedin />} href="https://www.linkedin.com/in/annkilzer/" />
            <FooterIcon label="GitHub" icon={<Github />} href="https://github.com/ann-kilzer" />
        </BottomNavigation>
    </Paper>
}

export default Footer
