import React, { useState } from 'react';
import '../styles/movies.css';

import MovieCard from './MovieCard';

function Movies({ movies, likedMovies, setLikedMovies, toggleLike }) {

    return (
        <>
            <h2>Movies</h2>
            <div className='moviesWrapper'>
                {movies.map((movie, index) => (
                    <div key={index}>
                        <MovieCard index={index} title={movie.title} rated={movie.rated} genres={movie.genres} likedMovies={likedMovies} toggleLike={toggleLike} />
                    </div>
                ))}
            </div>

        </>
    );
}

export default Movies;
