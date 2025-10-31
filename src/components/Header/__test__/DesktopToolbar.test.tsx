import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import DesktopHeader from '../DesktopHeader'

describe('Header', () => {
    it('should display the DesktopHeader', async () => {
        render(<DesktopHeader />)
        const title = await screen.findByText('WiSE Japan')
        expect(title).toBeVisible()
    })

    it('should show navigation links', async () => {
        render(<DesktopHeader />)
        const team = await screen.findByText('Team')
        expect(team).toBeVisible()
        const codeOfConduct = await screen.findByText('Code of Conduct')
        expect(codeOfConduct).toBeVisible()
        const wiki = await screen.findByText('Wiki')
        expect(wiki).toBeVisible()
    })
})
