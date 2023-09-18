import React from 'react'
import '../styles/moviecard.css'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function MovieCard({ index, title, rated, genres, likedMovies, toggleLike }) {
    return (
        <div className='movieCardWrapper'>
            <div className='title'>
                {title}{' '}
                {likedMovies[index] ? (
                    <AiFillHeart
                        className='filledHeart'
                        onClick={() => toggleLike(index)}
                    />
                ) : (
                    <AiOutlineHeart onClick={() => toggleLike(index)} />
                )}
            </div>
            <div className='genre'>
                Genre:{' '}
                {genres.map((genre, genreIndex) => (
                    <span key={genreIndex} className='genre'>
                        {genre}
                        {genreIndex < genres.length - 1 && ', '}
                    </span>
                ))}
            </div>
            <div className='ratedWrapper'>
                Rated: <span className='rated'>{rated}</span>
            </div>
        </div>
    )
}

export default MovieCard