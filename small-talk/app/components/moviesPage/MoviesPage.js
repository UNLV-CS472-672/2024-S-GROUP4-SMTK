import React from 'react';
import MovieRow from './MovieRow';
import movieData from '../../data/moviesData/movies.json'; // Correct path for your movie data
import StreamingServicesRow from './StreamingServicesRow';
import servicesData from '../../data/moviesData/streamingServices'; // Correct path for your streaming services data

function MoviesPage() {
    return (
        <div className="bg-gray-800 min-h-screen p-10 overflow-x-auto">
            <h1 className="text-white text-3xl font-bold mb-8 text-center">Movies Provided by Hospital</h1>
            <MovieRow title="Provided by Hospital" movies={movieData} />
            <h2 className="text-white text-3xl font-bold mb-8 text-center">Login to Your Streaming Services</h2>
            <StreamingServicesRow title="Personal Accounts" services={servicesData} />
        </div>
    );
}

export default MoviesPage;
