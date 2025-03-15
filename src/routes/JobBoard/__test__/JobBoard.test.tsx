import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import JobBoard from '../JobBoard'


describe('JobBoard', ()=> {
    it('should render the JobBoard page', async () => {
        render(<JobBoard />)
        const title = await screen.findByText('✨ Job Board ✨')
        expect(title).toBeVisible()
    })
})
