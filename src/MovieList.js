import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) && 
    (ratingFilter === '' || movie.rating >= ratingFilter)
  );

  return (
    <div>
      <div className="form-group">
        <label htmlFor="titleFilter">Title Filter:</label>
        <input type="text" className="form-control" id="titleFilter" value={titleFilter} onChange={(event) => setTitleFilter(event.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="ratingFilter">Rating Filter:</label>
        <input type="number" className="form-control" id="ratingFilter" min="1" max="10" value={ratingFilter} onChange={(event) => setRatingFilter(event.target.value)} />
      </div>
      <div className="card-columns">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;