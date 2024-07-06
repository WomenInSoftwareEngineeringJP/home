import { Mock } from 'vitest';
import useMediaQuery from '@mui/material/useMediaQuery';
import { screen } from '@testing-library/react';
import { render } from '@/tests/customRender';
import Header from '../Header';

vi.mock('@mui/material/useMediaQuery');

describe('Header', () => {
    it('should display the Header in desktop mode on wide screens', async () => {
        render(<Header />);
        const title = await screen.findByText('WiSE Japan');
        expect(title).toBeVisible();
        const toolbar = await screen.findByLabelText('desktop-toolbar');
        expect(toolbar).toBeVisible();
    });

    it('should display the Header in mobile mode on smaller screens', async () => {
        (useMediaQuery as Mock).mockReturnValueOnce(true);
        render(<Header />);
        const title = await screen.findByText('WiSE Japan');
        expect(title).toBeVisible();
        const toolbar = await screen.findByLabelText('mobile-toolbar');
        expect(toolbar).toBeVisible();
    });
});
