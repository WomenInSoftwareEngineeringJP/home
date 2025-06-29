import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import CssBaseline from '@mui/material/CssBaseline'
import CustomThemeProvider from '@/theme/CustomThemeProvider'
import Router from '../Router'
import '@/i18n/config'

// Mock all the route components
vi.mock('../Home/Home', () => ({
    default: () => <div data-testid="home-page">Home Page</div>
}))

vi.mock('../CodeOfConduct/CodeOfConduct', () => ({
    default: () => <div data-testid="code-of-conduct-page">Code of Conduct Page</div>
}))

vi.mock('../Team/Team', () => ({
    default: () => <div data-testid="team-page">Team Page</div>
}))

vi.mock('../JobBoard/JobBoard', () => ({
    default: () => <div data-testid="job-board-page">Job Board Page</div>
}))

vi.mock('../ThemePreview/ThemePreview', () => ({
    default: () => <div data-testid="theme-preview-page">Theme Preview Page</div>
}))

vi.mock('../NotFound/NotFound', () => ({
    default: () => <div data-testid="not-found-page">Not Found Page</div>
}))

// Mock the BaseLayout component
vi.mock('../BaseLayout', () => ({
    default: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="base-layout">
            <div data-testid="header">Header</div>
            {children}
            <div data-testid="footer">Footer</div>
        </div>
    )
}))

// Wrapper component for testing Router
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
    <CustomThemeProvider>
        <CssBaseline />
        {children}
    </CustomThemeProvider>
)

describe('Router', () => {
    it('should render RouterProvider without crashing', () => {
        render(
            <TestWrapper>
                <Router />
            </TestWrapper>
        )

        // Should render without errors
        expect(screen.getByTestId('base-layout')).toBeInTheDocument()
        expect(screen.getByTestId('header')).toBeInTheDocument()
        expect(screen.getByTestId('footer')).toBeInTheDocument()
    })
})
