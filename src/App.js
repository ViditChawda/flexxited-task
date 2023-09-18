import React, { useEffect, useState } from 'react';
import './App.css';
import { collection, addDoc } from 'firebase/firestore';
import { database } from './firebase.config';


import moviesData from './assets/movies_dataset.json'

import Movies from './components/Movies';
import Filters from './components/Filters';
import Wishlist from './components/Wishlist';

function App() {

  const [likedMovies, setLikedMovies] = useState(new Array(moviesData.length).fill(false));
  const [tag, setTag] = useState([]);

  // to only re-compute if moviesData changes
  const firstTenMovies = moviesData.slice(0, 15)
  const mySet = new Set();


  const handleFilter = (filter) => {
    if (tag.includes(filter)) {
      setTag(prev => {
        return prev.filter((t) => t !== filter)
      })
    } else {
      setTag((prev) => {
        return [...prev, filter]
      })
    }
  }



  for (let ind in firstTenMovies) {
    if (likedMovies[ind]) {
      for (let genre of firstTenMovies[ind].genres) {
        mySet.add(genre)
      }
    }
  }


  const toggleLike = (index) => {
    const updatedLikedMovies = [...likedMovies];
    updatedLikedMovies[index] = !updatedLikedMovies[index];
    setLikedMovies(updatedLikedMovies);
  };


  return (
    <div className="App">
      <Movies movies={firstTenMovies} likedMovies={likedMovies} setLikedMovies={setLikedMovies} toggleLike={toggleLike} />
      <Filters mySet={mySet} handleFilter={handleFilter} tag={tag} />
      <Wishlist tags={tag} movies={firstTenMovies} likedMovies={likedMovies} setLikedMovies={setLikedMovies} toggleLike={toggleLike} />
    </div>
  );
}

export default App;
