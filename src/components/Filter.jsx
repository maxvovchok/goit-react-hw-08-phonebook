import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ onFilterChange }) => {
  const handleChange = e => {
    onFilterChange(e.target.value);
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input onChange={handleChange} type="text" />
    </div>
  );
};

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
