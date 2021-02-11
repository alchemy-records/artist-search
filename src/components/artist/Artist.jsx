import React from 'react';
import PropTypes from 'prop-types';

function Artist({ id, name }) {
  return (
    <div>
      <p>{name}</p>    
    </div>
  );
}

Artist.propTypes = {
  name: PropTypes.string.isRequired
};

export default Artist;

