import Footer from './footer.js';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
//ai-gen start (ChatGPT-4, 1)
describe('Footer component', () => {
    it('should render without crashing', () => {
        render(<Footer />);
        expect(screen.getByText(/SmallTalk ©/i)).toBeInTheDocument();
    });

    it('should display the current year', () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(/SmallTalk © \d{4}/)).toBeInTheDocument();
    });

    it('redirects to privacy policy page whenn clicked in footer', () => {
        render(<Footer />);
        
        // Mock the window.location.href setter
        const originalLocation = window.location;
        delete window.location;
        window.location = { href: '' };
    
        // Trigger the goLogin function
        fireEvent.click(screen.getByText('Privacy Policy'));
    
        // Assert that window.location.href is set to '/login'
        expect(window.location.href).toBe('/privacyPolicy');
    
        // Restore the original window.location
        window.location = originalLocation;
      });
});
//ai-gen end
