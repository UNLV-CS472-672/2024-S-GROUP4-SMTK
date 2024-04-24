import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';

//ai-gen start (ChatGPT-4, 1)
describe('MovieCard', () => {
    const mockMovie = {
        title: 'Test Movie',
        poster: 'test-movie.jpg'
    };

    it('renders the movie card correctly', () => {
        render(<MovieCard movie={mockMovie} />);

        expect(screen.getByAltText(mockMovie.title)).toBeInTheDocument();
        expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
    });
});

//ai-gen end