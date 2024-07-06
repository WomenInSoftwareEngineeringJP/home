import { screen } from '@testing-library/react';
import { render } from '@/tests/customRender';
import Body1 from '../Body1';

describe('Body', () => {
    it('should render Body component correctly', async () => {
        render(<Body1>Test</Body1>);
        const text = await screen.findByText('Test');
        expect(text).toBeVisible();
    });
});
