import React from 'react';
import PropTypes from 'prop-types';
import Detail from './Detail';

const DetailList = ({ characters }) => {
  const renderDetail = characters.map(character => (
    <div key={character._id}>
      <Detail {...character} />
    </div>
  ));

  return (
    <div>{renderDetail}</div>
  );
};

DetailList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    allies: PropTypes.string.isRequired,
    enemies: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired
  }))
};

export default DetailList;
