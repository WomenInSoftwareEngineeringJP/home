import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation'
import Paper from '@mui/material/Paper'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import EventIcon from '@mui/icons-material/Event'
import FooterIcon from './FooterIcon'


const Footer: FC = () => {
    const location = useLocation()
    const path = location.pathname
    const isHome = /^\/$/.test(path)
    return <Paper sx={{ position: { xs: 'relative', sm: isHome ? 'fixed' : 'relative' }, bottom: 0, left: 0, right: 0 }} elevation={0} aria-label="footer">
        <BottomNavigation sx={{ backgroundColor: '#512da8' }}>
            <FooterIcon label="Events" icon={<EventIcon />} href="https://womeninsoftware-japan.connpass.com/" />
            <FooterIcon label="Instagram" icon={<InstagramIcon />} href="https://www.instagram.com/womeninsoftwarejp/" />
            <FooterIcon label="LinkedIn" icon={<LinkedInIcon />} href="https://www.linkedin.com/company/womeninsoftwarejp/" />
            <FooterIcon label="Facebook" icon={<FacebookIcon />} href="https://www.facebook.com/womeninsoftwarejp/" />
            <FooterIcon label="GitHub" icon={<GitHubIcon />} href="https://github.com/WomenInSoftwareEngineeringJP" />
        </BottomNavigation>
    </Paper>
}

export default Footer
