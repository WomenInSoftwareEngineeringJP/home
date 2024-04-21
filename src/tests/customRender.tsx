import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import CssBaseline from '@mui/material/CssBaseline';
import CustomThemeProvider from '@/theme/CustomThemeProvider';
import { MemoryRouter } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <CustomThemeProvider>
            <CssBaseline />
            <MemoryRouter>
                {children}
            </MemoryRouter>
        </CustomThemeProvider >
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'
export { customRender as render }
