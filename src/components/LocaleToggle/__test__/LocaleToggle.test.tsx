import { describe, expect, it } from 'vitest'
import { render } from '@/tests/customRender'
import LocaleToggle from '../LocaleToggle';
import userEvent from '@testing-library/user-event'

describe('LocaleToggle', () => {
    it('renders correctly', () => {
        const { getByText } = render(<LocaleToggle />);
        expect(getByText('English')).toBeInTheDocument();
        expect(getByText('日本語')).toBeInTheDocument();
    });
})

it('changes locale when toggling', async () => {
    const { getByText } = render(<LocaleToggle />);
    const japaneseButton = getByText('日本語');

    const user = userEvent.setup()
    await user.click(japaneseButton)
    expect(localStorage.getItem('locale')).toBe('ja');

    localStorage.removeItem('locale');
});
