import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ lyrics }) => {
  return (
    <div data-testid="lyrics">
      {lyrics}
    </div>
  );
};

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default Lyrics;
