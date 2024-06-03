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
      <h3>Lista de Filmes/Series</h3>
      <input
        class="busca"
        type="text"
        placeholder="Buscar..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <button onClick={sortMoviesAlphabetically}>Organizar</button>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.genre}
            <button class="botaoview" onClick={() => markAsWatched(index)}>Visto</button>
            <button class="botaoDel" onClick={() => deleteMovie(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
