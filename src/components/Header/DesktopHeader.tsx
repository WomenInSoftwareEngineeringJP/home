import { FC } from 'react'

import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import SideDrawer from '../SideDrawer/SideDrawer'
import StyledNavLink from '@/components/StyledNavLink/StyledNavLink'
import { useTranslation } from 'react-i18next'


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 80,
    },
    maxWidth: '100%'
}))



const DesktopHeader: FC = () => {
    const { t } = useTranslation()

    return <StyledToolbar aria-label="desktop-toolbar">
        <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
            <SideDrawer />
            <StyledNavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <Typography variant="h1">WiSE Japan</Typography>
                <Typography variant="caption">{t('header.subtitle')}</Typography>
            </StyledNavLink>
            <StyledNavLink to="/team" style={{ textDecoration: 'none', color: 'white' }}>
                <Typography variant="overline">{t('header.team')}</Typography>
            </StyledNavLink>
            <StyledNavLink to="/jobs" style={{ textDecoration: 'none', color: 'white' }}>
                <Typography variant="overline">{t('header.job')}</Typography>
            </StyledNavLink>
            <StyledNavLink to="/events" style={{ textDecoration: 'none', color: 'white' }}>
                <Typography variant="overline">{t('header.event')}</Typography>
            </StyledNavLink>
            <StyledNavLink to="/wiki" style={{ textDecoration: 'none', color: 'white' }}>
                <Typography variant="overline">{t('header.wiki')}</Typography>
            </StyledNavLink>
            <StyledNavLink to="/codeofconduct" style={{ textDecoration: 'none', color: 'white' }}>
                <Typography variant="overline">{t('header.codeOfConduct')}</Typography>
            </StyledNavLink>
        </Stack>
    </StyledToolbar>
}

export default DesktopHeader
