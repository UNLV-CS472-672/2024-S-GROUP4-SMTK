import React from 'react';
import Logo from './logo.js';
import { render, screen } from '@testing-library/react';
//ai-gen start (ChatGPT-4, 1)

describe('Logo component', () => {
    it('should render without crashing', () => {
        render(<Logo />);
        const logoElement = screen.getByAltText('Logo');
        expect(logoElement).toBeInTheDocument();
    });

    it('should contain a link to the homepage', () => {
        render(<Logo />);
        const logoLink = screen.getByRole('link');
        expect(logoLink).toHaveAttribute('href', '/homepage');
    });
});
//ai-gen end
