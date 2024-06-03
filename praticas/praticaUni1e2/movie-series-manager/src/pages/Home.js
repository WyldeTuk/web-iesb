import React, { useContext } from 'react';
import MovieForm from '../components/MovieForm';
import MovieList from '../components/MovieList';
import { MovieContext } from '../context/MovieContext';

const Home = () => {
  const { movies, addMovie } = useContext(MovieContext);

  return (
    <div>
      <MovieForm addMovie={addMovie} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;

