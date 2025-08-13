import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Router from '../Router'
import '@/i18n/config'

vi.mock('../BaseLayout', () => ({
    default: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="base-layout">
            <div data-testid="header">Header</div>
            {children}
            <div data-testid="footer">Footer</div>
        </div>
    )
}))

describe('Router', () => {
    it('should render RouterProvider with necessary components', () => {
        render(<Router />)

        expect(screen.getByTestId('base-layout')).toBeInTheDocument()
        expect(screen.getByTestId('header')).toBeInTheDocument()
        expect(screen.getByTestId('footer')).toBeInTheDocument()
    })
})
