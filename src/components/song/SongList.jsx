import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import { Link } from 'react-router-dom';

function SongList({ songs, artist }) {
  console.log('songsLIST', songs);
  console.log('artist LIST', artist);
  const songElements = songs.map(song => (
    <li key={song.id} >
      <Link to={`/${artist}/release/${song.title}/${song.id}`} >
        <Song id={song.id} title={song.title} />
      </Link>
    </li>
  ));
  return (
    <ul data-testid="songs" >
      {songElements}
    </ul>
  );
}

SongList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  artist: PropTypes.string.isRequired
};

export default SongList;
