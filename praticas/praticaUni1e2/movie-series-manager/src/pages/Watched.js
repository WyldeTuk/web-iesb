import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const Watched = () => {
  const { watchedMovies, deleteWatchedMovie } = useContext(MovieContext);

  return (
    <div>
      <h3>Watched Movies/Series</h3>
      <ul>
        {watchedMovies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.genre}
            <button onClick={() => deleteWatchedMovie(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watched;

