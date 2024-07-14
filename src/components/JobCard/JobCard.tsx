import { FC } from 'react'
import { Grid, Avatar, Typography, Link, Chip, Card, CardContent, Stack } from '@mui/material'
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
    return (
        <Stack spacing={1} alignItems="center">
            <Card sx={{ bgcolor: '#512DA8', color: 'white', p: 1, width: '100%' }}>
                <CardContent>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12} sm={2} display="flex" justifyContent="center">
                            <Avatar
                                sx={{ bgcolor: 'grey', width: 80, height: 80, borderRadius: 2 }}
                                alt={`${company} logo`}
                                src={logoUrl}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography variant="h6" component="div" sx={{ textAlign: 'left' }}>
                                <Link href={jobPostingUrl} underline="hover" color="inherit" target="_blank" rel="noopener noreferrer" sx={{ cursor: 'pointer' }}>
                                    {title}
                                </Link>
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
                            <Grid container spacing={1} mt={0.5} justifyContent="left">
                                {tags.map((tag, index) => (
                                    <Grid item key={index}>
                                        <Chip label={tag} sx={{ bgcolor: '#6A1B9A', color: 'white', height: 32, borderRadius: '8px' }} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={2} sx={{ order: { xs: -1, sm: 0 }, alignSelf: { sm: 'flex-start' } }} display="flex">
                            <Grid container spacing={1} sx={{ justifyContent: { xs: 'flex-end', sm: 'center' } }}>
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
                    </Grid>
                </CardContent>
            </Card>
        </Stack>
    )
}

export default JobCard
