import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import EventCard from '../EventCard'

const mockEvent = {
    id: 42,
    title: 'Tech Meetup',
    description: 'A meetup for tech enthusiasts.',
    url: 'https://techmeetup.com',
    place: 'Tokyo Conference Center',
    address: '1-2-3 Shibuya, Tokyo',
    eventDate: '2025-10-13T19:00+09:00',
    limit: '100',
    accepted: '80',
    waiting: '5',
}

describe('EventCard Component', () => {
    it('should render the event details correctly', async () => {
        render(<EventCard event={mockEvent} />)

        const title = await screen.findByText(mockEvent.title)
        expect(title).toBeVisible()

        const addressAndPlace = await screen.findByText(`${mockEvent.place} · ${mockEvent.address}`)
        expect(addressAndPlace).toBeVisible()

        const capacity = await screen.findByText(`${mockEvent.accepted} / ${mockEvent.limit}`)
        expect(capacity).toBeVisible()

        const waitingNumber = await screen.findByText(`Waiting: ${mockEvent.waiting}`)
        expect(waitingNumber).toBeVisible()
    })

    it('does not render address if it is empty and only render the place', async () => {
        const eventWithoutAddress = { ...mockEvent, address: '' }
        render(<EventCard event={eventWithoutAddress} />)

        const addressAndPlace = await screen.findByText(mockEvent.place)
        expect(addressAndPlace).toBeVisible()

        // separator for address and place should not be rendered
        expect(screen.queryByText('·')).not.toBeInTheDocument()
    })

    it('does not render waiting if it is zero', () => {
        const eventNotFull = { ...mockEvent, waiting: '0' }
        render(<EventCard event={eventNotFull} />)

        expect(screen.queryByText(eventNotFull.waiting)).not.toBeInTheDocument()
    })

    it('does not render event capacity if limit is 0', () => {
        const eventWithoutCapacity = { ...mockEvent, limit: '0' }
        render(<EventCard event={eventWithoutCapacity} />)

        expect(screen.queryByText(eventWithoutCapacity.limit)).not.toBeInTheDocument()
    })

    it('should render the EventCard Read More button', async () => {
        render(<EventCard event={mockEvent} />)

        const button = await screen.findByRole('link', { name: /read more/i })
        expect(button).toBeVisible()
        expect(button).toHaveAttribute('href', mockEvent.url)
    })
})
