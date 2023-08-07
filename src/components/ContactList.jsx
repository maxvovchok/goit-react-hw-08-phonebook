import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => onDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
