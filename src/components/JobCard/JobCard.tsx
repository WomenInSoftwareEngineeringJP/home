import { FC } from 'react'
import { Stack, Grid, Avatar, Typography, Button, Chip, Card, CardContent } from '@mui/material'
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

    return <Card sx={{ bgcolor: '#512da8', color: 'white', width: '100%' }}>
        <CardContent>
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} sm={12} md={2} display="flex" justifyContent="center">
                    <Avatar
                        sx={{ bgcolor: 'grey', width: 90, height: 90, borderRadius: 2 }}
                        alt={`${job.company} logo`}
                        src={job.logoUrl}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={8} mt={2}>
                    <Typography variant="h5" mb={2} component="div" sx={{ textAlign: 'left' }}>
                        {job.title}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'center' }, alignItems: 'center' }}>
                            <BusinessIcon />
                            <Typography fontSize="body2" sx={{ ml: 1 }}>{job.company}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'center' }, alignItems: 'center' }}>
                            <LocationOnIcon />
                            <Typography fontSize="body2" sx={{ ml: 1 }}>{job.location}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'center' }, alignItems: 'center' }}>
                            <AccountBalanceWalletIcon />
                            <Typography fontSize="body2" sx={{ ml: 1 }}>{job.salary}</Typography>
                        </Grid>
                    </Grid>
                    <Stack direction='row' spacing={1} mt={2} justifyContent="flex-start">
                        {job.tags.map((tag, index) => (
                            <Chip key={index} label={tag} sx={{ bgcolor: '#6A1B9A', color: 'white', height: 32, borderRadius: '8px' }} />
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={2} paddingRight={2} sx={{ order: { xs: -1, sm: -1, md: 0 }, alignSelf: { sm: 'flex-start' } }} display="flex" alignItems="center" justifyContent="right">
                    <AccessTimeIcon sx={{ marginRight: 2 }} />
                    <Typography fontSize="body2">
                        { job.publicationDate }
                    </Typography>
                </Grid>
                <Grid container spacing={1} justifyContent="right">
                    <Grid item>
                        <Button
                            variant="contained"
                            onClick={handleReadMoreClick}
                            sx={{
                                mt: 1,
                                padding: '4px 8px',
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
