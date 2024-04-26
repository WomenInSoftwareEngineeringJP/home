import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import LocaleToggle from '../LocaleToggle';
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'

describe('LocaleToggle', () => {
    it('renders correctly', async () => {
        render(<LocaleToggle />)

        const english = await screen.findByText('English');
        const japanese = await screen.findByText('日本語');
        expect(english).toBeInTheDocument();
        expect(japanese).toBeInTheDocument();
    });
})

it('changes locale when toggling', async () => {
    render(<LocaleToggle />);
    const japaneseButton = screen.getByText('日本語');

    const user = userEvent.setup()
    await user.click(japaneseButton)
    expect(localStorage.getItem('locale')).toBe('ja');

    localStorage.removeItem('locale');
});
