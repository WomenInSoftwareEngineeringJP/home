import { describe, expect, it, beforeEach } from 'vitest'
import { render } from '@/tests/customRender'
import { screen } from '@testing-library/react'
import CodeOfConduct from './CodeOfConduct'
import i18next from 'i18next'

describe('CodeOfConduct Route', () => {
    const changeLanguage = async (language: string) => {
        await i18next.changeLanguage(language)
    }

    describe('English Language', () => {
        beforeEach(async () => {
            await changeLanguage('en')
        })

        it('should display the Code of Conduct heading in English', async () => {
            render(<CodeOfConduct />)
            const heading = await screen.findByRole('heading', {
                name: 'Code of Conduct',
            })
            expect(heading).toBeVisible()
        })

        it('should display all expected headings in English', async () => {
            render(<CodeOfConduct />)
            const headings = await screen.findAllByRole('heading')
            expect(headings).toHaveLength(5)

            expect(headings[0]).toHaveTextContent('Code of Conduct')
            expect(headings[1]).toHaveTextContent('Women in Software Engineering Japan Statement of Intent')
            expect(headings[2]).toHaveTextContent('Code of Conduct for Women in Software Engineering Japan Events')
            expect(headings[3]).toHaveTextContent('How to Report Harassment and Discrimination')
            expect(headings[4]).toHaveTextContent('Periodic Review')
        })
    })

    describe('Japanese Language', () => {
        beforeEach(async () => {
            await changeLanguage('ja')
        })

        it('should display the Code of Conduct heading in Japanese', async () => {
            render(<CodeOfConduct />)
            const heading = await screen.findByRole('heading', {
                name: '行動規範',
            })
            expect(heading).toBeVisible()
        })

        it('should display all expected headings in Japanese', async () => {
            render(<CodeOfConduct />)
            const headings = await screen.findAllByRole('heading')
            expect(headings).toHaveLength(5)

            expect(headings[0]).toHaveTextContent('行動規範')
            // FIXME: The other headings are have not been translated yet, testing the English headings for now
            expect(headings[1]).toHaveTextContent('Women in Software Engineering Japan Statement of Intent')
            expect(headings[2]).toHaveTextContent('Code of Conduct for Women in Software Engineering Japan Events')
            expect(headings[3]).toHaveTextContent('How to Report Harassment and Discrimination')
            expect(headings[4]).toHaveTextContent('Periodic Review')
        })
    })
})
