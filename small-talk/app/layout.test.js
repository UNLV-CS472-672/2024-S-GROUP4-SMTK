import React from 'react';
import { render } from '@testing-library/react';
import RootLayout from './layout.js'; // Assuming RootLayout.js is the file name

// Mock the import of Inter
jest.mock('next/font/google', () => ({
  Inter: jest.fn().mockReturnValue({ className: 'mocked-inter' }),
}));

describe('RootLayout component', () => {
  it('renders children wrapped in HTML with language attribute', () => {
    const { container } = render(<RootLayout><div>Test Child</div></RootLayout>);
    const htmlElement = container.querySelector('html');
    const bodyElement = container.querySelector('body');

    expect(htmlElement).toBeInTheDocument();
    expect(htmlElement).toHaveAttribute('lang', 'en');

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveClass('mocked-inter');
    expect(bodyElement).toHaveTextContent('Test Child');
  });
});