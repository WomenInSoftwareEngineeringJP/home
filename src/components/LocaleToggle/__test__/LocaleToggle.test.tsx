import { useTranslation } from 'react-i18next';
import { screen } from '@testing-library/react';
import { Mock } from 'vitest';

import { render } from '@/tests/customRender';
import LocaleToggle from '../LocaleToggle';

vi.mock('react-i18next', async (importOriginal) => {
    const actual = await importOriginal<typeof import('react-i18next')>();
    return {
        ...actual,
        useTranslation: vi.fn(),
    };
});

const useTranslationSpy = useTranslation as Mock;

beforeEach(() => {
    vi.clearAllMocks();

    useTranslationSpy.mockReturnValue({
        i18n: { changeLanguage: vi.fn(() => new Promise(() => {})) },
    });
});

describe('LocaleToggle', () => {
    it('renders correctly', async () => {
        render(<LocaleToggle />);

        const english = await screen.findByText('English');
        const japanese = await screen.findByText('日本語');
        expect(english).toBeInTheDocument();
        expect(japanese).toBeInTheDocument();
    });

    it('changes locale when toggling', async () => {
        const { user } = render(<LocaleToggle />);
        const japaneseButton = screen.getByRole('button', { name: '日本語' });

        await user.click(japaneseButton);
        expect(localStorage.getItem('locale')).toBe('ja');

        localStorage.removeItem('locale');
    });

    it('handles failed changeLanguage error correctly', async () => {
        // Mock changeLanguage function to throw an error
        useTranslationSpy.mockReturnValue({
            i18n: { changeLanguage: vi.fn().mockRejectedValue(new Error()) },
        });

        const consoleErrorSpy = vi
            .spyOn(console, 'error')
            .mockImplementation(() => {});

        const { user } = render(<LocaleToggle />);
        const japaneseButton = screen.getByRole('button', { name: '日本語' });

        await user.click(japaneseButton);
        // `console.error` should be called with an error
        expect(consoleErrorSpy).toHaveBeenCalledWith(expect.any(Error));

        consoleErrorSpy.mockRestore();
        useTranslationSpy.mockRestore();
    });
});
