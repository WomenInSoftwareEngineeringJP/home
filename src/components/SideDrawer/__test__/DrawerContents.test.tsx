import { Mock } from 'vitest';
import { screen } from '@testing-library/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { render } from '@/tests/customRender';
import DrawerContents from '../DrawerContents';

vi.mock('@mui/material/useMediaQuery');

describe('DrawerContents', () => {
    it('should display the DrawerContents', async () => {
        render(<DrawerContents />);
        const japanese = await screen.findByRole('button', { name: '日本語' });
        expect(japanese).toBeVisible();
    });

    it('should show the NavLinks on mobile screens', async () => {
        (useMediaQuery as Mock).mockReturnValueOnce(true);
        render(<DrawerContents />);
        const japanese = await screen.findByRole('button', { name: '日本語' });
        expect(japanese).toBeVisible();

        const homeLink = await screen.findByRole('link', { name: 'Home' });
        const codeOfConductLink = await screen.findByRole('link', {
            name: 'Code of Conduct',
        });

        expect(homeLink).toBeVisible();
        expect(codeOfConductLink).toBeVisible();
    });
});
