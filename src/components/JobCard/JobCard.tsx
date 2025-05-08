import { FC } from 'react'
import { Grid, Avatar, Typography, Button, Chip, Card, CardContent, Stack } from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import JobData from '@/types/JobListing'


interface JobCardProps {
    job: JobData
}

const JobCard: FC<JobCardProps> = ({ job }) => {
    const handleReadMoreClick = () => {
        window.open(job.jobPostingUrl, '_blank', 'noopener,noreferrer')
    }

    return <Card sx={{ bgcolor: 'primary.dark', width: '100%' }} data-testid="job-card">
        <CardContent>
            <Grid size={{ xs: 12, md: 2 }} display={{ xs: 'flex', sm: 'flex', md: 'none' }} alignItems="center" justifyContent="right" sx={{ marginBottom: { xs: 4, sm: 4 }, marginRight: 2 }}>
                <AccessTimeIcon sx={{ marginRight: 1 }} />
                <Typography fontSize="body2" data-testid="publication-date-mobile">
                    {job.publicationDate}
                </Typography>
            </Grid>
            <Grid container alignItems="center">
                <Grid size={{ sm: 12, md: 2 }} display="flex" justifyContent="center">
                    <Avatar
                        sx={{
                            bgcolor: 'white', width: 135, height: 135, borderRadius: 2, img: { objectFit: 'contain', width: '90%', height: '100%' }
                        }}
                        alt={`${job.company} logo`}
                        src={job.logoUrl}
                    />
                </Grid>
                <Grid size={{ sm: 12, md: 8 }} mt={2}>
                    <Typography variant="h5" mb={2} mt={2} component="div" sx={{ textAlign: 'left' }}>
                        {job.title}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 4 }} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <BusinessIcon />
                            <Typography fontSize="body2" sx={{ ml: 1 }}>{job.company}</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <LocationOnIcon />
                            <Typography fontSize="body2" sx={{ ml: 1 }}>{job.location}</Typography>
                        </Grid>
                        {job.salary != '' &&
                            <Grid size={{ xs: 12, sm: 4 }} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <AccountBalanceWalletIcon />
                                <Typography fontSize="body2" sx={{ ml: 1 }}>{job.salary}</Typography>
                            </Grid>
                        }
                    </Grid>
                    <Stack direction='row' mt={2} justifyContent="flex-start" flexWrap="wrap" sx={{ gap: 2, spacing: { sx: 0, md: 1 } }}>
                        {job.tags.map((tag, index) => (
                            <Chip aria-label="chip" key={index} label={tag} sx={{ bgcolor: 'secondary.dark', color: 'white', height: 32, borderRadius: '8px' }} />
                        ))}
                    </Stack>
                </Grid>
                <Grid container size={{ sm: 12, md: 2 }} paddingRight={2} sx={{ alignItems: 'flex-end', justifyContent: 'flex-start', flexDirection: 'column' }}>
                    <Grid display={{ xs: 'none', sm: 'none', md: 'flex' }} alignItems="center" justifyContent="right" paddingBottom={3}>
                        <AccessTimeIcon sx={{ marginRight: 2 }} />
                        <Typography fontSize="body2" data-testid="publication-date-desktop">
                            {job.publicationDate}
                        </Typography>
                    </Grid>
                    <Grid display="flex-end" sx={{ marginTop: { xs: 3 }, paddingLeft: { md: 3 } }}>
                        <Button
                            variant="contained"
                            color="tertiary"
                            onClick={handleReadMoreClick}
                            sx={{
                                padding: '4px 8px',
                                transform: { md: 'translateY(40px)' },
                            }}
                        >
                            Read More
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
}

export default JobCard
