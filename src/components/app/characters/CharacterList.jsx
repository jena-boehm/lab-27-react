import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
// import { render } from '@testing-library/react';

const CharacterList = ({ characters }) => {
  const renderCharacter = characters.map(character => (
    <li key={character.id}>
      <Character {...character} />
    </li>
  ));

  return (
    <ul>
      {renderCharacter}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;
