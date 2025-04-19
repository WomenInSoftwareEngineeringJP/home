import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import JobCard from '../JobCard'

const mockJob = {
    title: 'Software Engineer',
    company: 'Tech Corp',
    location: 'Tokyo, Shibuya',
    salary: '600,000 - 12,000,000',
    tags: ['React', 'JavaScript', 'Frontend'],
    logoUrl: 'https://via.placeholder.com/150',
    publicationDate: '2025/03/31',
    jobPostingUrl: 'https://jobpostingurl.com',
}

describe('JobCard Component', () => {
    it('should render the job details correctly', async () => {
        render(<JobCard job={mockJob} />)

        const title = await screen.findByText(mockJob.title)
        expect(title).toBeVisible()

        const company = await screen.findByText(mockJob.company)
        expect(company).toBeVisible()

        const location = await screen.findByText(mockJob.location)
        expect(location).toBeVisible()

        const salary = await screen.findByText(mockJob.salary)
        expect(salary).toBeVisible()

        mockJob.tags.forEach((tag) => {
            expect(screen.getByText(tag)).toBeInTheDocument()
        })

        const publicationDateDesktop = await screen.findByTestId('publication-date-desktop')
        expect(publicationDateDesktop).toBeVisible()

        const publicationDateMobile = await screen.findByTestId('publication-date-mobile')
        expect(publicationDateMobile).toBeVisible()

        const logo = screen.getByAltText(`${mockJob.company} logo`)
        expect(logo).toBeInTheDocument()
        expect(logo).toHaveAttribute('src', mockJob.logoUrl)
    })

    it('does not render salary if it is empty', () => {
        const jobWithoutSalary = { ...mockJob, salary: '' }
        render(<JobCard job={jobWithoutSalary} />)

        expect(screen.queryByText(mockJob.salary)).not.toBeInTheDocument()
    })

    it('should render tags with correct styles', async () => {
        render(<JobCard job={mockJob} />)
        const chips = await screen.findAllByLabelText('chip')

        chips.forEach((chip, index) => {
            expect(chip).toHaveTextContent(mockJob.tags[index])
            expect(chip).toHaveStyle('background-color: rgb(2, 119, 189)')
            expect(chip).toHaveStyle('color:rgb(255, 255, 255)')
        })
    })

    it('should render the JobCard and handle the Read More button click', async () => {
        render(<JobCard job={mockJob} />)

        const readMoreButton = await screen.findByRole('button', { name: 'Read More' })

        expect(readMoreButton).toBeVisible()
        expect(readMoreButton).toBeEnabled()

        readMoreButton.click()
    })
})
