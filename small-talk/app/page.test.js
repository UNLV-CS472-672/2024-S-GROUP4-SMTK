import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page.js'; // Assuming Home.js is the file name

// Mock the import of Libre_Franklin
jest.mock('next/font/google', () => ({
  Libre_Franklin: jest.fn().mockReturnValue({ className: 'mocked-libre-franklin' }),
}));

describe('Home component', () => {
  it('renders the main section with correct content', () => {
    render(<Home />);
    
    const mainElement = screen.getByRole('main');
    const headingElement = screen.getByRole('heading', { name: /small talk app/i });
    const linkElement = screen.getByRole('link', { name: /navigate to login page/i });

    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveClass('flex min-h-screen flex-col items-center justify-between p-24');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('font-sans text-4xl');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/login');
  });
});
