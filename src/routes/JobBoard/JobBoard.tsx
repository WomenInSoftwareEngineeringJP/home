import { FC, ReactNode } from 'react'
import JobCard from '@/components/JobCard/JobCard'
import { Container, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import  job from '@/routes/JobBoard/jobs.json'
import JobData from '@/types/JobListing'

const JobBoard:FC = () => {
    const { t } = useTranslation()

    const jobGrid: ReactNode[] = []
    job.forEach((jobDescription: JobData) => {
        jobGrid.push(<JobCard job={jobDescription}/>)
    })

    return <Container style={{ padding: 32 }} aria-label="job-board-container">
        <Stack spacing={4}>
            <Typography variant="h1">{t('job.title')}</Typography>
            {jobGrid}
        </Stack>
    </Container>
}

export default JobBoard
