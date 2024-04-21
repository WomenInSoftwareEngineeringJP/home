import { FC } from 'react';
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

const Home: FC = () => {
    return <Container style={{ padding: 32 }}>
        <Stack spacing={2}>
            <Typography variant="h2">✨ Hello World ✨</Typography>
            <Typography variant="body1">
                Many of us were saddened to hear of the sudden closure of Women Who Code.
                There is a need for an organization to empower diverse women in technology careers in Tokyo and across Japan.
            </Typography>
            <Typography>
                We are not giving up on this mission.
                Please join us in rebuilding community so that we can empower women in Japan in Software Engineering careers.
            </Typography>

            <Typography>
                Our events target professional women in software careers with 2+ years of experience. Beginners to seasoned professionals are welcome to participate.
                While this organization focuses on women, all genders are welcome at our events.
                Software-adjacent roles like Data Science, Product, UI/UX, Machine Learning, etc., are welcome, too.
            </Typography>

            <Button variant='contained' href='https://join.slack.com/t/womencodersjapan/shared_invite/zt-2h79966bm-dE7SyiGvv2CXBxbz_0JzKw' target='_blank'>
                ✨ Join us on Slack ✨
            </Button>
        </Stack>
    </Container>
}

export default Home
