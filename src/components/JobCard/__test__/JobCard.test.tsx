import { describe, expect, it, vi } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import JobCard from '../JobCard'

// Mock data for the job
const mockJob = {
    title: 'Software Engineer',
    company: 'Tech Corp',
    location: 'Tokyo, Shibuya',
    salary: '600,000 - 12,000,000',
    tags: ['React', 'JavaScript', 'Frontend'],
    logoUrl: 'https://via.placeholder.com/150',
    publicationDate: '31/01/2025',
    jobPostingUrl: 'https://jobpostingurl.com',
}

describe('JobCard Component', () => {
    it('should render the job details correctly', () => {
        render(<JobCard job={mockJob} />)

        // Check the job title
        expect(screen.getByText(mockJob.title)).toBeInTheDocument()

        // Check the company name
        expect(screen.getByText(mockJob.company)).toBeInTheDocument()

        // Check the location
        expect(screen.getByText(mockJob.location)).toBeInTheDocument()

        // Check the salary
        expect(screen.getByText(mockJob.salary)).toBeInTheDocument()

        // Check the tags
        mockJob.tags.forEach((tag) => {
            expect(screen.getByText(tag)).toBeInTheDocument()
        })

        // Check the publication date
        expect(screen.getAllByText(mockJob.publicationDate).length).toBeGreaterThan(0)

        // Check the logo
        const logo = screen.getByAltText(`${mockJob.company} logo`)
        expect(logo).toBeInTheDocument()
        expect(logo).toHaveAttribute('src', mockJob.logoUrl)
    })

    it('does not render salary if it is empty', () => {
        const jobWithoutSalary = { ...mockJob, salary: '' }
        render(<JobCard job={jobWithoutSalary} />)

        // Ensure the salary is not rendered
        expect(screen.queryByText(mockJob.salary)).not.toBeInTheDocument()
    })

    it('should renders tags with correct styles', () => {
        const { container } = render(<JobCard job={mockJob} />)

        // Select all Chip elements (MUI typically applies .MuiChip-root class)
        const chips = container.querySelectorAll('.MuiChip-root')

        expect(chips.length).toBe(mockJob.tags.length)

        chips.forEach((chip, index) => {
            expect(chip).toHaveTextContent(mockJob.tags[index])
            expect(chip).toHaveStyle('background-color: rgb(2, 119, 189)')
            expect(chip).toHaveStyle('color:rgb(255, 255, 255)')
        })
    })

    it('should render the JobCard and handle the Read More button click', async () => {
        // Backup original window.open
        const originalOpen = window.open

        // Override window.open with a mock function
        window.open = vi.fn()

        render(<JobCard job={mockJob} />)

        // Find the button by its role and name
        const readMoreButton = await screen.findByRole('button', { name: 'Read More' })

        // Ensure the button is visible and enabled
        expect(readMoreButton).toBeVisible()
        expect(readMoreButton).toBeEnabled()

        // Simulate button click
        await userEvent.click(readMoreButton)

        // Ensure window.open was called with the correct arguments
        expect(window.open).toHaveBeenCalledWith(
            mockJob.jobPostingUrl,
            '_blank',
            'noopener,noreferrer'
        )

        // Restore the original window.open after the test
        window.open = originalOpen
    })
})
