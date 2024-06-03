import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !genre) {
      setError('Both fields are required');
      return;
    }
    addMovie({ title, genre });
    setTitle('');
    setGenre('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add filmes/Series</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Titulo:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Gênero:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default MovieForm;
