import { FC } from 'react';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';

const Home: FC = () => {
    return <Container>
        <Grid container>
            <Grid item lg={6}>
                <Typography variant="h2">Welcome to our Website</Typography>
                <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem repellat qui ut non ratione nostrum quidem maiores repellendus aut soluta, quod placeat est, blanditiis amet odit sapiente vel sed reiciendis.
                </Typography>
            </Grid>
        </Grid>

    </Container>
}

export default Home
