import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

function ArtistList({ artists }) {

  const artistElements = artists.map(artist => (
    <li key={artist.id}>
      <Artist
        id={artist.id}
        artist={artist.artist} />
    </li>
  ));

  return (
    <div>
      <ul data-testid="artists">
        {artistElements}
      </ul>
    </div>
  );
}

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired
  })).isRequired
};

export default ArtistList;

