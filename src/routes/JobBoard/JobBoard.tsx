import { FC } from 'react'
import JobCard from '@/components/JobCard/JobCard'
import { Container } from '@mui/material'
import { jobData } from '@/utils/jobData'

const JobBoard:FC = () => {
    return (
        <Container style={{ padding: 25 }}>
            {jobData.map((job, index) => (
                <JobCard
                    key={index}
                    title={job.title}
                    company={job.company}
                    logoUrl={job.logoUrl}
                    location={job.location}
                    jobPostingUrl={job.jobPostingUrl}
                    salary={job.salary}
                    publicationDate={job.publicationDate}
                    tags={job.tags}
                />
            ))}
        </Container>
    )
}

export default JobBoard
