import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import { screen } from '@testing-library/react'
import { render } from '@/tests/customRender'
import BaseLayout from '../BaseLayout'
import '@/i18n/config'

vi.mock('@/components/Header/Header', () => ({
    default: () => <div data-testid="header">Header Component</div>,
}))

vi.mock('@/components/Footer/Footer', () => ({
    default: () => <div data-testid="footer">Footer Component</div>,
}))

// Mock a child component for testing Outlet
const MockChildComponent = () => {
    return <div data-testid="child-content">Child Content</div>
}

// Create a lazy component for testing loading state
const MockLazyChildComponent = lazy(() =>
    new Promise(() => {}) // Never resolves, so Suspense will show fallback
)

describe('BaseLayout', () => {
    it('should render header, outlet, and footer components', () => {
        render(
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<MockChildComponent />} />
                </Route>
            </Routes>
        )

        expect(screen.getByTestId('header')).toBeInTheDocument()
        expect(screen.getByTestId('child-content')).toBeInTheDocument()
        expect(screen.getByTestId('footer')).toBeInTheDocument()
    })

    it('should render components in correct order', () => {
        render(
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<MockChildComponent />} />
                </Route>
            </Routes>
        )

        const container = screen.getByTestId('header').parentElement
        const children = Array.from(container?.children || [])

        // Check that header comes first
        expect(children[0]).toHaveAttribute('data-testid', 'header')
        // Check that footer comes last
        expect(children[children.length - 1]).toHaveAttribute(
            'data-testid',
            'footer'
        )
    })

    it('should show loading fallback when Suspense is triggered', () => {
        // Test that the BaseLayout component properly shows the loading fallback
        render(
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<MockLazyChildComponent />} />
                </Route>
            </Routes>
        )

        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })

    it('should render without crashing when no child route is provided', () => {
        render(<BaseLayout />)

        expect(screen.getByTestId('header')).toBeInTheDocument()
        expect(screen.getByTestId('footer')).toBeInTheDocument()
    })
})
