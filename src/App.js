
import './App.css';
import React, { useState } from 'react';
import MovieCard from './MovieCard';
import Filter from'./Filter';
import MovieList from './MovieList';
import MovieForm from './MovieForm';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="container">
      <h1>My Favorite Movies</h1>
      <Filter onFilter={(filterValue) => console.log(filterValue)} />
      <MovieList movies={movies} />
      <hr />
      <h2>Add a New Movie</h2>
      <MovieForm onAddMovie={handleAddMovie} />
    </div>
  );
};

export default App;
