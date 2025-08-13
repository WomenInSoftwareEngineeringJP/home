import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { render } from '@/tests/customRender'
import ImageCard from './ImageCard'

describe('ImageCard', () => {
    it('should render ImageCard component correctly with basic props', async () => {
        render(
            <ImageCard src="Krizza.jpg" alt="Cat 🐱" />
        )
        const image = await screen.findByRole('img')
        expect(image).toHaveAttribute('src', 'Krizza.jpg')
        expect(image).toHaveAttribute('alt', 'Cat 🐱')
        expect(image).toBeVisible()
    })

    it('should apply custom width and height when provided', () => {
        const testWidth = 300
        const testHeight = 200

        render(
            <ImageCard
                src="test.jpg"
                alt="Test"
                width={testWidth}
                height={testHeight}
            />
        )

        const image = screen.getByRole('img')
        expect(image).toHaveAttribute('width', testWidth.toString())
        expect(image).toHaveAttribute('height', testHeight.toString())
        expect(image).toBeVisible()
    })

    it('should handle string-based width and height', () => {
        const testWidth = '50%'
        const testHeight = 'auto'

        render(
            <ImageCard
                src="test.jpg"
                alt="Test"
                width={testWidth}
                height={testHeight}
            />
        )

        const image = screen.getByRole('img')
        expect(image).toHaveAttribute('width', testWidth)
        expect(image).toHaveAttribute('height', testHeight)
        expect(image).toBeVisible()
    })

    it('should render even when width and height are not provided', () => {
        render(<ImageCard src="test.jpg" alt="Test" />)

        const image = screen.getByRole('img')
        expect(image).not.toHaveAttribute('width')
        expect(image).not.toHaveAttribute('height')
        expect(image).toBeVisible()
    })
})
