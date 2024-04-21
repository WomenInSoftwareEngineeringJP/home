import { FC } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { NavLink } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const DrawerContents: FC = () => {
    const theme = useTheme()
    let navList = <></>
    if (useMediaQuery(theme.breakpoints.down('sm'))) {
        navList = (<>
            <ListItem>
                <NavLink to='/'>Home</NavLink>
            </ListItem>
            <ListItem>
                <NavLink to='/software'>Software</NavLink>
            </ListItem>
            <ListItem>
                <NavLink to='/art'>Art</NavLink>
            </ListItem>
            <ListItem>
                <NavLink to='/writing'>Writing</NavLink>
            </ListItem>
            <Divider />
        </>)
    }

    return <Box sx={{ width: 300 }}>
        <List>
            {navList}
            <ListItem>
                <ThemeToggle />
            </ListItem>
        </List>
    </Box>
}

export default DrawerContents
