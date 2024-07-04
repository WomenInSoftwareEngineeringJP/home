import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import Team from '../Team';

describe('Team', () => {
    it('should render the Team page', async () => {
        render(<Team />)
        const title = await screen.findByText('✨ Leadership Team ✨')
        expect(title).toBeVisible()
    })
});
