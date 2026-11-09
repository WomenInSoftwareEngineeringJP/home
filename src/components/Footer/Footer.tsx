import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation'
import Paper from '@mui/material/Paper'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EventIcon from '@mui/icons-material/Event'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import FooterIcon from './FooterIcon'
import SimpleAnalyticsBadge from './SimpleAnalyticsBadge'


const Footer: FC = () => {
    const location = useLocation()
    const path = location.pathname
    const isHome = /^\/$/.test(path)
    return <Paper sx={{ position: { xs: 'relative', sm: isHome ? 'fixed' : 'relative' }, bottom: 0, left: 0, right: 0, bgcolor: '#512da8', color: 'common.white' }} elevation={0} aria-label="footer">
        <Container maxWidth="lg" disableGutters sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', px: { sm: 4 } }}>
            <BottomNavigation sx={{ width: { xs: '100%', sm: 'auto' }, backgroundColor: '#512da8' }}>
                <FooterIcon label="Events" icon={<EventIcon />} href="https://luma.com/womeninsoftwarejp" />
                <FooterIcon label="Instagram" icon={<InstagramIcon />} href="https://www.instagram.com/womeninsoftwarejp/" />
                <FooterIcon label="LinkedIn" icon={<LinkedInIcon />} href="https://www.linkedin.com/company/womeninsoftwarejp/" />
                <FooterIcon label="GitHub" icon={<GitHubIcon />} href="https://github.com/WomenInSoftwareEngineeringJP" />
            </BottomNavigation>
            <Box sx={{ alignSelf: { xs: 'center', sm: 'auto' }, px: { xs: 2, sm: 0 }, pb: { xs: 1, sm: 0 }, fontSize: '0.75rem' }}>
                <SimpleAnalyticsBadge />
            </Box>
        </Container>
    </Paper>
}

export default Footer
