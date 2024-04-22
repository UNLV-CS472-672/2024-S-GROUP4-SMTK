import Footer from './footer.js';
import React from 'react';
import { render, screen } from '@testing-library/react';
//ai-gen start (ChatGPT-4, 1)
describe('Footer component', () => {
    it('should render without crashing', () => {
        render(<Footer />);
        expect(screen.getByText(/SmallTalk ©/i)).toBeInTheDocument();
    });

    it('should display the current year', () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(`SmallTalk © ${currentYear}`)).toBeInTheDocument();
    });
});
//ai-gen end
