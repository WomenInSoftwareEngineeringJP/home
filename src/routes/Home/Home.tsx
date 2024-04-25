import { FC } from 'react';
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
    const { t } = useTranslation();

    return <Container style={{ padding: 32 }}>
        <Stack spacing={2}>
            <Typography variant="h1">{t('home.helloWorld')}</Typography>
            <Typography variant="body1">
                {t('home.paragraph1')}
            </Typography>
            <Typography>
                {t('home.paragraph2')}
            </Typography>

            <Typography>
                {t('home.paragraph3')}
            </Typography>

            <Button
                variant='contained'
                href='https://join.slack.com/t/womencodersjapan/shared_invite/zt-2h79966bm-dE7SyiGvv2CXBxbz_0JzKw'
                target='_blank'
            >
                {t('home.joinUs')}
            </Button>
        </Stack>
    </Container>
}

export default Home
