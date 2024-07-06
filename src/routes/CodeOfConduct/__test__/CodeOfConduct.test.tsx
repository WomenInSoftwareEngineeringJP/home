import { render } from '@/tests/customRender';
import { screen } from '@testing-library/react';
import CodeOfConduct from '../CodeOfConduct';

describe('CodeOfConduct Route', () => {
    it('should display the CodeOfConduct Route', async () => {
        render(<CodeOfConduct />);
        const heading = await screen.findByRole('heading', {
            name: 'Code of Conduct',
        });
        expect(heading).toBeVisible();

        expect(await screen.findAllByRole('heading')).toHaveLength(5);
    });
});
