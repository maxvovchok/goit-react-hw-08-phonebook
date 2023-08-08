import React from 'react';
import { setFilter } from 'redux/slice/filterSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
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
