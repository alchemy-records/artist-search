import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Artist({ id, name }) {
  return (
    <div>
      <Link to={`/artist/${id}`}>
        <p>{name}</p>  
      </Link>  
    </div>
  );
}

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Artist;
