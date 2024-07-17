import { FC } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import StyledNavLink from '../StyledNavLink/StyledNavLink'
import LocaleToggle from '../LocaleToggle/LocaleToggle'
import { useTranslation } from 'react-i18next'

const DrawerContents: FC = () => {
    const theme = useTheme()
    const { t } = useTranslation()
    let navList = <></>
    if (useMediaQuery(theme.breakpoints.down('sm'))) {
        navList = (<>
            <ListItem>
                <StyledNavLink to='/'>Home</StyledNavLink>
            </ListItem>
            <ListItem>
                <StyledNavLink to='/team'>{t('sidebar.team')}</StyledNavLink>
            </ListItem>
            <ListItem>
                <StyledNavLink to='/codeofconduct'>{t('sidebar.codeOfConduct')}</StyledNavLink>
            </ListItem>
            <Divider />
        </>)
    }

    return <Box sx={{ width: 300 }}>
        <List>
            {navList}
            <ListItem>
                <LocaleToggle />
            </ListItem>
        </List>
    </Box>
}

export default DrawerContents
