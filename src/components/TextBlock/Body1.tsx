import { FC, ReactNode } from 'react'
import Typography from '@mui/material/Typography';

interface Body1Props {
    children: ReactNode
}

const Body1: FC<Body1Props> = ({ children }) => {
    return <Typography variant='body1' marginY={2}>
        {children}
    </Typography>
}

export default Body1
