import { FC } from 'react'
import EventData from '@/types/EventData'
import { useTranslation } from 'react-i18next'

import {
    Card,
    CardContent,
    Typography,
    Chip,
    Stack,
    Box,
    Grid,
    Button,
    Tooltip,
} from '@mui/material'
import EventIcon from '@mui/icons-material/Event'
import PlaceIcon from '@mui/icons-material/Place'
import GroupIcon from '@mui/icons-material/Group'

interface EventCardProps {
    event: EventData
}

const EventCard: FC<EventCardProps> = ({ event }) => {
    const { t } = useTranslation()

    const limit = Number(event.limit) || 0
    const accepted = Number(event.accepted) || 0
    const waiting = Number(event.waiting) || 0
    const eventDate: string = t('event.intlDateTime',
        {
            val: new Date(event.eventDate),
            formatParams: {
                val: {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                }
            }
        }) as string

    return (
        <Card sx={{ bgcolor: 'primary.dark', width: '100%' }} data-testid="event-card" aria-label="event-card">
            <CardContent>
                <Grid container>
                    <Grid size={{ sm: 12, md: 12 }} mt={2}>
                        <Typography variant="h5" mb={2} mt={2} component="div" sx={{ textAlign: 'left' }}>
                            {event.title}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid
                                size={{ xs: 12, sm: 8 }}
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { xs: 'flex-start', sm: 'center' },
                                }}
                            >
                                {/* Date */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: { xs: '100%', sm: 'auto' },
                                    }}
                                >
                                    <EventIcon sx={{ marginRight: 2 }} />
                                    <Typography fontSize="body2" data-testid="publication-date-desktop">
                                        {eventDate}
                                    </Typography>
                                </Box>
                                {/* Chips row — one row on desktop, stacked on mobile */}
                                <Box
                                    sx={{
                                        display: { xs: 'flex', sm: 'flex' },
                                        mt: { xs: 1, sm: 0 },
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    {limit > 0 &&
                                    <Tooltip title="Accepted / Limit">
                                        <Chip
                                            icon={<GroupIcon />}
                                            label={`${accepted} / ${limit}`}
                                            color="primary"
                                            sx={{
                                                mt: { xs: 1 },
                                                bgcolor: 'primary.main',
                                                color: 'primary.contrastText',
                                                ml: {sm: 1},
                                            }}
                                        />
                                    </Tooltip>
                                    }
                                    {waiting > 0 &&
                                    <Chip
                                        color="primary"
                                        label={`Waiting: ${waiting}`}
                                        sx={{
                                            marginLeft: 2,
                                            bgcolor: 'primary.main',
                                            color: 'primary.contrastText',
                                            mr: 1,
                                        }}
                                    />}
                                </Box>
                            </Grid>
                            <Grid size={12} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <PlaceIcon sx={{ marginRight: 2 }} />
                                <Typography fontSize="body2">
                                    {event.place}{event.address ? ` · ${event.address}` : ''}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Stack direction='row' mt={2} justifyContent="flex-start" flexWrap="wrap" sx={{ gap: 2, spacing: { sx: 0, md: 1 } }}>
                            <Typography fontSize="body2" sx={{ textAlign: 'left', whiteSpace: 'pre-line' }}>
                                {event.description}
                            </Typography>
                        </Stack>

                        <Stack direction='row' mt={2} justifyContent="flex-end" flexWrap="wrap" sx={{ gap: 2, spacing: { sx: 0, md: 1 } }}>
                            <Button
                                variant="contained"
                                color="tertiary"
                                href={event.url}
                                target="_blank"
                                rel="noopener"
                                role="link"
                                sx={{
                                    padding: '4px 8px',
                                }}
                            >
                                Read More
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )

}

export default EventCard
