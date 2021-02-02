import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, photoUrl }) => (
  <figure>
    <figcaption>{name}</figcaption>
    <img src={photoUrl} />
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired
};

export default Character;
