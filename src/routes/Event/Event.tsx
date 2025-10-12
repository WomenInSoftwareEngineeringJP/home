import { FC } from 'react'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTranslation } from 'react-i18next'
import theme from '@/theme/theme'

const Event: FC = () => {
    const { t } = useTranslation()

    const title = useMediaQuery(theme.breakpoints.down('sm')) ?
        <Typography variant="h3" component="h1">{t('event.pageTitle')}</Typography> :
        <Typography variant="h1" >{t('event.pageTitle')}</Typography>

    const howToContact = useMediaQuery(theme.breakpoints.down('sm')) ?
        <Typography variant="h3" component="h1">{t('event.contactTitle')}</Typography> :
        <Typography variant="h2" >{t('event.contactTitle')}</Typography>

    return <Container style={{ padding: 32 }}>
        <Stack spacing={2}>

            {title}
            <Typography variant="body1">
                {t('event.paragraph1')}
            </Typography>
            <Typography variant="body1">
                {t('event.paragraph2')}
            </Typography>

            <Typography variant="body1">
                {t('event.paragraph3')}
            </Typography>

            <Button
                variant='contained'
                href='https://womeninsoftware-japan.connpass.com/event/'
                target='_blank'
            >
                {t('event.reviewEvent')}
            </Button>

            {howToContact}
            <iframe
                src="https://women-in-software.notion.site/ebd/61cb6a1a3b93470687ca1f6c2628da1b"
                width="100%"
                height="600"
            />


        </Stack>
    </Container>
}

export default Event
