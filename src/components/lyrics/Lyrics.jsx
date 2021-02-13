import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ lyrics }) => {
  return (
    <pre data-testid="lyrics">
      {lyrics.lyrics}
    </pre>
  );
};

Lyrics.propTypes = {
  lyrics: PropTypes.object.isRequired
};

export default Lyrics;
