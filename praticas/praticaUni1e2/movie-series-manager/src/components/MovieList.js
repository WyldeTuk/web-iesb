import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';

const MovieList = () => {
  const { movies, deleteMovie, markAsWatched, sortMoviesAlphabetically, searchMovies } = useContext(MovieContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    searchMovies(e.target.value);
  };

  return (
    <div>
      <h3>Movie/Series List</h3>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <button onClick={sortMoviesAlphabetically}>Sort Alphabetically</button>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.genre}
            <button onClick={() => markAsWatched(index)}>Mark as Watched</button>
            <button onClick={() => deleteMovie(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
