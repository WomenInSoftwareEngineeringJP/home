import { FC } from 'react'
import { Container } from '@mui/material'
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
    maxWidth: '100%',
}))

const DesktopHeader: FC = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <StyledToolbar aria-label="desktop-toolbar" disableGutters>
                <Stack direction="row" sx={{ width: '100%' }}>
                    {/* Center: Navigation */}
                    <Stack
                        direction="row"
                        spacing={4}
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ flexGrow: 1 }}
                    >
                        <StyledNavLink
                            to="/"
                            style={{ textDecoration: 'none', color: 'white' }}
                        >
                            <Typography variant="h1">WiSE Japan</Typography>
                            <Typography variant="caption">
                                {t('header.subtitle')}
                            </Typography>
                        </StyledNavLink>
                        <Stack display={'flex'} flexDirection={'row'} gap={2}>
                            <StyledNavLink
                                to="/team"
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                            >
                                <Typography variant="overline">
                                    {t('header.team')}
                                </Typography>
                            </StyledNavLink>
                            <StyledNavLink
                                to="/jobs"
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                            >
                                <Typography variant="overline">
                                    {t('header.job')}
                                </Typography>
                            </StyledNavLink>
                            <StyledNavLink
                                to="/codeofconduct"
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                            >
                                <Typography variant="overline">
                                    {t('header.codeOfConduct')}
                                </Typography>
                            </StyledNavLink>
                            {/* Left: Side Drawer */}
                            <SideDrawer />
                        </Stack>
                    </Stack>
                </Stack>
            </StyledToolbar>
        </Container>
    )
}

export default DesktopHeader
