import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Artist({ id, artist }) {
  return (
    <div>
      <Link to={`/${artist}/${id}`}>
        <p>{artist}</p>  
      </Link>  
    </div>
  );
}

Artist.propTypes = {
  artist: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Artist;
