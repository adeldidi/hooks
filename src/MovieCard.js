import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="card">
      <img src={posterURL} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">{rating} / 10</small></p>
      </div>
    </div>
  );
};

export default MovieCard;