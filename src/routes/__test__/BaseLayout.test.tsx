import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import CustomThemeProvider from '@/theme/CustomThemeProvider'
import BaseLayout from '../BaseLayout'
import '@/i18n/config'

// Mock the child components
vi.mock('@/components/Header/Header', () => ({
    default: () => <div data-testid="header">Header Component</div>,
}))

vi.mock('@/components/Footer/Footer', () => ({
    default: () => <div data-testid="footer">Footer Component</div>,
}))

const mockFetchData = vi.fn<() => unknown>()

// Mock a child component for testing Outlet
const MockChildComponent = () => {
    const data = mockFetchData()
    if (data instanceof Promise) {
        // eslint-disable-next-line @typescript-eslint/only-throw-error
        throw data
    }
    return <div data-testid="child-content">Child Content</div>
}

// Wrapper component for testing BaseLayout with routing
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <CustomThemeProvider>
        <CssBaseline />
        <MemoryRouter>{children}</MemoryRouter>
    </CustomThemeProvider>
)

describe('BaseLayout', () => {
    it('should render header, outlet, and footer components', () => {
        render(
            <TestWrapper>
                <Routes>
                    <Route path="/" element={<BaseLayout />}>
                        <Route index element={<MockChildComponent />} />
                    </Route>
                </Routes>
            </TestWrapper>
        )

        expect(screen.getByTestId('header')).toBeInTheDocument()
        expect(screen.getByTestId('child-content')).toBeInTheDocument()
        expect(screen.getByTestId('footer')).toBeInTheDocument()
    })

    it('should render components in correct order', () => {
        render(
            <TestWrapper>
                <Routes>
                    <Route path="/" element={<BaseLayout />}>
                        <Route index element={<MockChildComponent />} />
                    </Route>
                </Routes>
            </TestWrapper>
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

    it('should render Suspense with fallback loader', () => {
        // Create a component that will trigger Suspense by using a promise
        mockFetchData.mockReturnValue(new Promise(() => {}))

        render(
            <TestWrapper>
                <Routes>
                    <Route path="/" element={<BaseLayout />}>
                        <Route index element={<MockChildComponent />} />
                    </Route>
                </Routes>
            </TestWrapper>
        )

        // Should show loading fallback
        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })

    it('should render without crashing when no child route is provided', () => {
        render(
            <TestWrapper>
                <BaseLayout />
            </TestWrapper>
        )

        expect(screen.getByTestId('header')).toBeInTheDocument()
        expect(screen.getByTestId('footer')).toBeInTheDocument()
    })
})
