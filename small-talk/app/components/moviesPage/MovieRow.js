import React from 'react';
import MovieCard from './MovieCard';

function MovieRow({ title, movies }) {
    const moreCard = {
        id: 'more',
        title: 'More',
        poster: '/img/movies/more-image.jpg' // Adjust path as necessary
    };

    return (
        <div className="mb-8">
            <h2 className="text-white text-xl mb-4">{title}</h2>
            <div className="flex overflow-x-auto space-x-4 pl-4">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
                <MovieCard key={moreCard.id} movie={moreCard} />
            </div>
        </div>
    );
}

export default MovieRow;
