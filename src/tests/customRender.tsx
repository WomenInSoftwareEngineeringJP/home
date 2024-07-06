import { MemoryRouter } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CssBaseline from '@mui/material/CssBaseline';

import CustomThemeProvider from '@/theme/CustomThemeProvider';
import '@/i18n/config';

export const customRender = (
    ui: React.ReactElement,
    options: Omit<RenderOptions, 'wrapper'> = {}
) => {
    const AllTheProviders = ({ children }: React.PropsWithChildren) => {
        return (
            <CustomThemeProvider>
                <CssBaseline />
                <MemoryRouter>{children}</MemoryRouter>
            </CustomThemeProvider>
        );
    };

    return {
        user: userEvent.setup(),
        ...render(ui, { wrapper: AllTheProviders, ...options }),
    };
};

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };
