import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleFilter = (event) => {
    setFilterValue(event.target.value);
    onFilter(event.target.value);
  };

  return (
    <div className="form-group">
      <input type="text" className="form-control" placeholder="Filter by title or rating" value={filterValue} onChange={handleFilter} />
    </div>
  );
};

export default Filter;