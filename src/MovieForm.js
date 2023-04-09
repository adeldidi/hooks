import React, { useState } from 'react';

const MovieForm = ({ onAddMovie }) => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [posterURL, setPosterURL] = useState('');
const [rating, setRating] = useState('');

const handleSubmit = (event) => {
event.preventDefault();
const movie = { title, description, posterURL, rating };
onAddMovie(movie);
setTitle('');
setDescription('');
setPosterURL('');
setRating('');
};

return (
<form onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="title">Title:</label>
<input type="text" className="form-control" id="title" value={title} onChange={(event) => setTitle(event.target.value)} required />
</div>
<div className="form-group">
<label htmlFor="description">Description:</label>
<textarea className="form-control" id="description" rows="3" value={description} onChange={(event) => setDescription(event.target.value)} required></textarea>
</div>
<div className="form-group">
<label htmlFor="posterURL">Poster URL:</label>
<input type="text" className="form-control" id="posterURL" value={posterURL} onChange={(event) => setPosterURL(event.target.value)} required />
</div>
<div className="form-group">
<label htmlFor="rating">Rating:</label>
<input type="number" className="form-control" id="rating" min="1" max="10" value={rating} onChange={(event) => setRating(event.target.value)} required />
</div>
<button type="submit" className="btn btn-primary">Add Movie</button>
</form>
);
};

export default MovieForm;