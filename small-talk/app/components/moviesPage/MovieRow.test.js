import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieRow from './MovieRow';

//ai-gen start (ChatGPT-4, 1)

describe('MovieRow', () => {
    const mockMovies = [
        { id: '1', title: 'Movie 1', poster: '/img/movies/movie1.jpg' },
        { id: '2', title: 'Movie 2', poster: '/img/movies/movie2.jpg' },
    ];

    it('renders the title and movies correctly', () => {
        render(<MovieRow title="Test Title" movies={mockMovies} />);

        expect(screen.getByText('Test Title')).toBeInTheDocument();
        mockMovies.forEach(movie => {
            expect(screen.getByText(movie.title)).toBeInTheDocument();
        });
        expect(screen.getByText('More')).toBeInTheDocument();
    });
});
//ai-gen end