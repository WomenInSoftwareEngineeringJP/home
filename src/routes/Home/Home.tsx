import { FC } from 'react'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTranslation } from 'react-i18next'
import theme from '@/theme/theme'

const Home: FC = () => {
    const { t } = useTranslation()

    const title = useMediaQuery(theme.breakpoints.down('sm')) ?
        <Typography variant="h3" component="h1">{t('home.helloWorld')}</Typography> :
        <Typography variant="h1" >{t('home.helloWorld')}</Typography>

    return <Container style={{ padding: 32 }}>
        <Stack spacing={2}>

            {title}
            <Typography variant="body1">
                {t('home.paragraph1')}
            </Typography>
            <Typography variant="body1">
                {t('home.paragraph2')}
            </Typography>

            <Typography variant="body1">
                {t('home.paragraph3')}
            </Typography>

            <Button
                variant='contained'
                href='https://join.slack.com/t/wise-japan/shared_invite/zt-3day0p55s-f7cx26Q3ZLw0XB34SjbKIg'
                target='_blank'
            >
                {t('home.joinUs')}
            </Button>

            <Typography variant="body2">
                {t('home.whoShouldJoin')}
            </Typography>
        </Stack>
    </Container>
}

export default Home
