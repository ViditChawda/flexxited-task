import React, { useEffect, useState } from "react";
import "./App.css";

import { collection, setDoc, addDoc, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase.config";

import moviesData from "./assets/movies_dataset.json";

import Movies from "./components/Movies";
import Filters from "./components/Filters";
import Wishlist from "./components/Wishlist";

// taking only first 15 movies
const FIRST_FIFTEEN = 15;

function App() {
  const [likedMovies, setLikedMovies] = useState(
    new Array(FIRST_FIFTEEN).fill(false)
  );
  const [tag, setTag] = useState([]);

  const firstTenMovies = moviesData.slice(0, FIRST_FIFTEEN);
  const mySet = new Set();

  // This funtion is to store 
  const handleFilter = (filter) => {
    if (tag.includes(filter)) {
      setTag((prev) => {
        return prev.filter((t) => t !== filter);
      });
    } else {
      setTag((prev) => {
        return [...prev, filter];
      });
    }
  };

  for (let ind in firstTenMovies) {
    if (likedMovies[ind]) {
      for (let genre of firstTenMovies[ind].genres) {
        mySet.add(genre);
      }
    }
  }

  const toggleLike = (index) => {
    const updatedLikedMovies = [...likedMovies];
    updatedLikedMovies[index] = !updatedLikedMovies[index];
    setLikedMovies(updatedLikedMovies);

    const lm = doc(db, "wishlist", "likedMovies");
    setDoc(lm, { likedMovies: updatedLikedMovies });
  };

  useEffect(() => {
    // setting all liked movies on first render
    const getMovies = async () => {
      const wm = doc(db, "wishlist", "likedMovies");
      const lm = await getDoc(wm);
      if (lm.exists()) {
        console.log(lm.data().likedMovies);
        setLikedMovies(lm.data().likedMovies);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="App">
      <Movies
        movies={firstTenMovies}
        likedMovies={likedMovies}
        setLikedMovies={setLikedMovies}
        toggleLike={toggleLike}
      />
      <Filters mySet={mySet} handleFilter={handleFilter} tag={tag} />
      <Wishlist
        tags={tag}
        movies={firstTenMovies}
        likedMovies={likedMovies}
        setLikedMovies={setLikedMovies}
        toggleLike={toggleLike}
      />
    </div>
  );
}

export default App;
