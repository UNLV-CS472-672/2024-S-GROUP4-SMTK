import React from 'react';
import { render, screen } from '@testing-library/react';
import MoviesPage from './MoviesPage';
//ai-gen start (ChatGPT-4, 2)

describe('MoviesPage', () => {
    it('renders the page title, movie row, and streaming services row correctly', () => {
        render(<MoviesPage />);

        expect(screen.getByText('Movies Provided by Hospital')).toBeInTheDocument();
        expect(screen.getByText('Login to Your Streaming Services')).toBeInTheDocument();
        const headings = screen.getAllByRole('heading', { name: /Provided by Hospital/i });
        expect(headings).toHaveLength(2);
        expect(screen.getByRole('heading', { name: /Personal Accounts/i })).toBeInTheDocument();
    });
});
//ai-gen end