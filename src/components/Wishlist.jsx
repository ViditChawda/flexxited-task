import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import MovieCard from './MovieCard';

function Wishlist({ tags = [], movies, likedMovies, setLikedMovies, toggleLike }) {
    console.log(tags)

    return (
        <div>
            <h2>Your Wishlist</h2>
            <div className='moviesWrapper'>
                {
                    movies.map((movie, index) => {
                        let shouldRender = !tags.length;
                        let tagExists = false;
                        if (tags.length) {
                            //tags= [Drama, Action, Comedy]
                            // genere= [Sci-Fi, Action]
                            const g = movie.genres;
                            for (let gen of g) {
                                if (tags.includes(gen)) {
                                    tagExists = true;
                                    break;
                                }
                            }
                        }

                        return (
                            <div key={index}>
                                {
                                    (likedMovies[index] && (shouldRender || tagExists)) && <MovieCard index={index} title={movie.title} rated={movie.rated} genres={movie.genres} likedMovies={likedMovies} toggleLike={toggleLike} />
                                }
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Wishlist