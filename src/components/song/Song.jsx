import React from 'react';
import PropTypes from 'prop-types';

function Song({ title }) {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
}

Song.propTypes = {
  title: PropTypes.string.isRequired

};

export default Song;

