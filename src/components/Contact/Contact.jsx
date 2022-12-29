import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Contact.styled';

export const Contact = ({ contact: { name, number, id }, deleteContact }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <Button type="button" name="delte" onClick={() => deleteContact(id)}>
        delete
      </Button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func.isRequired,
};
