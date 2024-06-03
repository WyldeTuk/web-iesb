import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';

const Watched = () => {
  const { watchedMovies, deleteWatchedMovie, sortWatchedMoviesAlphabetically, searchWatchedMovies } = useContext(MovieContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    searchWatchedMovies(e.target.value);
  };

  return (
    <div>
      <h3>Filmes/Series Assistidos</h3>
      <input
        class="busca"
        type="text"
        placeholder="Buscar..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <button onClick={sortWatchedMoviesAlphabetically}>Organizar</button>
      <ul>
        {watchedMovies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.genre}
            <button class="botaoDel"  onClick={() => deleteWatchedMovie(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watched;
