import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeConatct } from 'redux/slice/contactsSlice';
import { getFilteredContacts } from 'redux/selectors';
import PropTypes from 'prop-types';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(getFilteredContacts);

  const deleteContact = id => {
    dispatch(removeConatct(id));
  };
  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => deleteContact(id)}>Delete</button>
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
