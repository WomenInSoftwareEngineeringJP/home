import { FC } from 'react'
import { Grid, Avatar, Typography, Button, Chip, Card, CardContent, Stack } from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import AccessTimeIcon from '@mui/icons-material/AccessTime'


interface JobCardProps {
    title: string;
    company: string;
    logoUrl: string;
    jobPostingUrl: string;
    location:string,
    salary: string;
    tags: string[];
}

const JobCard: FC<JobCardProps> = ({ title, company, logoUrl, jobPostingUrl, location, salary, tags }) => {
    const handleReadMoreClick = () => {
        if (jobPostingUrl) {
            window.open(jobPostingUrl, '_blank', 'noopener,noreferrer')
        } else {
            console.error('No URL provided')
        }
    }

    return (
        <Stack spacing={1} alignItems="center">
            <Card sx={{ bgcolor: '#512DA8', color: 'white', width: '100%' }}>
                <CardContent>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12} sm={12} md={2} display="flex" justifyContent="center">
                            <Avatar
                                sx={{ bgcolor: 'grey', width: 80, height: 80, borderRadius: 2 }}
                                alt={`${company} logo`}
                                src={logoUrl}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={8}>
                            <Typography variant="h6" component="div" sx={{ textAlign: 'left' }}>
                                {title}
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'center' }, alignItems: 'center' }}>
                                    <BusinessIcon fontSize="small" />
                                    <Typography fontSize="medium" sx={{ ml: 1 }}>{company}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'center' }, alignItems: 'center' }}>
                                    <LocationOnIcon fontSize="small" />
                                    <Typography fontSize="medium" sx={{ ml: 1 }}>{location}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'center' }, alignItems: 'center' }}>
                                    <AccountBalanceWalletIcon fontSize="small" />
                                    <Typography fontSize="medium" sx={{ ml: 1 }}>{salary}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} mt={0.5} justifyContent="flex-start">
                                {tags.map((tag, index) => (
                                    <Grid item key={index}>
                                        <Chip label={tag} sx={{ bgcolor: '#6A1B9A', color: 'white', height: 32, borderRadius: '8px' }} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={2} sx={{ order: { xs: -1, sm: -1, md:0 }, alignSelf: { sm: 'flex-start' } }} display="flex">
                            <Grid container spacing={1} justifyContent="right">
                                <Grid item>
                                    <AccessTimeIcon fontSize="small" />
                                </Grid>
                                <Grid item>
                                    <Typography fontSize="medium">
                                        {new Date().toLocaleDateString('ja-JP', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit'
                                        })}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} justifyContent="right">
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleReadMoreClick}
                                    sx={{
                                        mt: 1,
                                        bgcolor: '#6A1B9A',
                                        color: 'white',
                                        fontSize: 'small',
                                        padding: '4px 8px',
                                        '&:hover': {
                                            bgcolor: '#512DA8'
                                        }
                                    }}
                                >
                                    Read More
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Stack>
    )
}

export default JobCard
