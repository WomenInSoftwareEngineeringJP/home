import { FC } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'


const NotFound: FC = () => {
    return <Container>
        <Typography variant='h2'>404: Not Found!</Typography>
        <Typography variant='subtitle1'><NavLink to="/">Go back home</NavLink></Typography>
    </Container>
}

export default NotFound
