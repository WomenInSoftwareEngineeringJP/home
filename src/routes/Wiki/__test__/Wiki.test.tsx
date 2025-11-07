import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import Wiki from '../Wiki'

describe('Wiki', () => {
    it('should render the Wiki page', async () => {
        render(<Wiki />)
        const title = await screen.findByText('📚 Wiki')
        expect(title).toBeVisible()
        const iframeElement = screen.getByTitle('Women in Software Engineering Japan Public Wiki on Notion')
        expect(iframeElement).toBeVisible()
    })
})
