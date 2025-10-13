import { FC, ReactNode } from 'react'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTranslation } from 'react-i18next'
import theme from '@/theme/theme'
import event from '@/routes/Event/events.json'
import EventData from '@/types/EventData'
import EventCard from '@/components/EventCard/EventCard'

const Event: FC = () => {
    const { t } = useTranslation()

    const title = useMediaQuery(theme.breakpoints.down('sm')) ?
        <Typography variant="h3" component="h1">{t('event.pageTitle')}</Typography> :
        <Typography variant="h1" >{t('event.pageTitle')}</Typography>

    const sponsorinEventTitle = useMediaQuery(theme.breakpoints.down('sm')) ?
        <Typography variant="h3" component="h1">{t('event.sponsoringEventTitle')}</Typography> :
        <Typography variant="h2">{t('event.sponsoringEventTitle')}</Typography>

    const eventGrid: ReactNode[] = []
    event.forEach((eventData: EventData) => {
        eventGrid.push(<EventCard key={eventData.id} event={eventData} />)
    })

    return <Container style={{ padding: 32 }} aria-label="events-container">
        <Stack spacing={2} marginBottom={4}>
            {title}

            {eventGrid}

            <Button
                variant='contained'
                href='https://womeninsoftware-japan.connpass.com/event/'
                target='_blank'
            >
                {t('event.reviewEvent')}
            </Button>
        </Stack>

        <Stack spacing={2}>
            {sponsorinEventTitle}
            <iframe
                src="https://women-in-software.notion.site/ebd/61cb6a1a3b93470687ca1f6c2628da1b"
                width="100%"
                height="600"
            />
        </Stack>
    </Container>
}

export default Event
