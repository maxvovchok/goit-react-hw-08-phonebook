import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { deleteContact } from 'redux/operations';
import { selectFilteredContactsSelector } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContactsSelector);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContact1 = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul>
        {filteredContacts.map(({ name, phone, id }) => (
          <li key={id}>
            {name}: {phone}
            <button onClick={() => deleteContact1(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
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
