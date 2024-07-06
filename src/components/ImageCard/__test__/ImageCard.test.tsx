import { screen } from '@testing-library/react';
import { render } from '@/tests/customRender';
import ImageCard from '../ImageCard';

describe('ImageCard', () => {
    it('should render ImageCard component correctly', async () => {
        render(
            <ImageCard src="https://i.imgur.com/pEI5qWM.jpeg" alt="Cat 🐱" />
        );
        const image = await screen.findByRole('img');
        expect(image).toBeVisible();
    });
});
