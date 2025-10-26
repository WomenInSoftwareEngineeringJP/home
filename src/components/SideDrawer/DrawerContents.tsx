import { FC } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import StyledNavLink from '../StyledNavLink/StyledNavLink'
import LocaleToggle from '../LocaleToggle/LocaleToggle'
import { useTranslation } from 'react-i18next'

interface DrawerContentsProps {
    closeDrawer: () => void
}

const DrawerContents: FC<DrawerContentsProps> = ({ closeDrawer }) => {
    const theme = useTheme()
    const { t } = useTranslation()

    let navList = <></>
    if (useMediaQuery(theme.breakpoints.down('sm'))) {
        navList = (<>
            <ListItem>
                <Stack direction='row' sx={{ width: '100%', m: 0, p: 0 }}>
                    <StyledNavLink to='/'>Home</StyledNavLink>
                    <Box sx={{ display: 'flex-grow', width: '100%' }} />
                    <IconButton onClick={closeDrawer} aria-label='close-button'>
                        <CloseIcon />
                    </IconButton>
                </Stack>
            </ListItem>
            <ListItem>
                <StyledNavLink to='/team'>{t('sidebar.team')}</StyledNavLink>
            </ListItem>
            <ListItem>
                <StyledNavLink to='/jobs'>{t('sidebar.job')}</StyledNavLink>
            </ListItem>
            <ListItem>
                <StyledNavLink to='/events'>{t('sidebar.event')}</StyledNavLink>
            </ListItem>
            <ListItem>
                <StyledNavLink to='/wiki'>{t('sidebar.wiki')}</StyledNavLink>
            </ListItem>
            <ListItem>
                <StyledNavLink to='/codeofconduct'>{t('sidebar.codeOfConduct')}</StyledNavLink>
            </ListItem>
            <Divider />
        </>)
    }

    return <Box sx={{ width: 300 }} aria-label='drawer-contents'>
        <List>
            {navList}
            <ListItem>
                <LocaleToggle />
            </ListItem>
        </List>
    </Box>
}

export default DrawerContents
