import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [watchedSearchQuery, setWatchedSearchQuery] = useState('');

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const deleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  const deleteWatchedMovie = (index) => {
    setWatchedMovies(watchedMovies.filter((_, i) => i !== index));
  };

  const markAsWatched = (index) => {
    const movie = movies[index];
    setWatchedMovies([...watchedMovies, movie]);
    setMovies(movies.filter((_, i) => i !== index));
  };

  const sortMoviesAlphabetically = () => {
    setMovies([...movies].sort((a, b) => a.title.localeCompare(b.title)));
  };

  const sortWatchedMoviesAlphabetically = () => {
    setWatchedMovies([...watchedMovies].sort((a, b) => a.title.localeCompare(b.title)));
  };

  const searchMovies = (query) => {
    setSearchQuery(query);
  };

  const searchWatchedMovies = (query) => {
    setWatchedSearchQuery(query);
  };

  const filteredMovies = searchQuery
    ? movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : movies;

  const filteredWatchedMovies = watchedSearchQuery
    ? watchedMovies.filter(movie => movie.title.toLowerCase().includes(watchedSearchQuery.toLowerCase()))
    : watchedMovies;

  return (
    <MovieContext.Provider value={{
      movies: filteredMovies,
      addMovie,
      deleteMovie,
      watchedMovies: filteredWatchedMovies,
      deleteWatchedMovie,
      markAsWatched,
      sortMoviesAlphabetically,
      sortWatchedMoviesAlphabetically,
      searchMovies,
      searchWatchedMovies
    }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
