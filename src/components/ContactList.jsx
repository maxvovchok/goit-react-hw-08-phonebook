import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeConatct } from 'redux/slice/contactsSlice';
import { getArrayContacts, getFilter } from 'redux/selectors';
import PropTypes from 'prop-types';

export const ContactList = () => {
  const arrayContacts = useSelector(getArrayContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = arrayContacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

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
