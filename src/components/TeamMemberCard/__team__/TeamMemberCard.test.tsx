import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import TeamMemberCard from '../TeamMemberCard'
import TeamMember from '@/types/TeamMember'
import '@/i18n/config'
import i18next from 'i18next'


describe('TeamMemberCard', () => {
    const member = {
        nameEN: 'Alice',
        nameJA: 'アリス',
        titleEN: 'Lead',
        titleJA: 'リード',
        image: 'example.png',
        url: 'https://example.com'
    } as TeamMember

    it('should render a TeamMemberCard in English', async () => {
        render(<TeamMemberCard member={member} />)
        const name = await screen.findByText(member.nameEN)
        expect(name).toBeVisible()
        const title = await screen.findByText(member.titleEN)
        expect(title).toBeVisible()
        const link = await screen.findByRole('link')
        expect(link).toHaveAttribute('href', member.url)
        const image = await screen.findByRole('img')
        expect(image).toBeVisible()
    })

    it('should render a TeamMemberCard in Japanese', async () => {
        await i18next.changeLanguage('ja')
        render(<TeamMemberCard member={member} />)

        const name = await screen.findByText(member.nameJA)
        expect(name).toBeVisible()
        const title = await screen.findByText(member.titleJA)
        expect(title).toBeVisible()
        const link = await screen.findByRole('link')
        expect(link).toHaveAttribute('href', member.url)
        const image = await screen.findByRole('img')
        expect(image).toBeVisible()
    })

    const partialMember = {
        nameEN: 'Alice',
        nameJA: '',
        titleEN: 'Lead',
        titleJA: '',
        image: 'example.png',
        url: 'https://example.com'
    } as TeamMember

    it('should render a TeamMemberCard in Japanese and fall back to English when fields are unset', async () => {
        await i18next.changeLanguage('ja')
        render(<TeamMemberCard member={partialMember} />)

        const name = await screen.findByText(partialMember.nameEN)
        expect(name).toBeVisible()
        const title = await screen.findByText(partialMember.titleEN)
        expect(title).toBeVisible()
        const link = await screen.findByRole('link')
        expect(link).toHaveAttribute('href', member.url)
        const image = await screen.findByRole('img')
        expect(image).toBeVisible()
    })
})
