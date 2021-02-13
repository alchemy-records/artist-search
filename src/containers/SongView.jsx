import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/loading/Loading';
import { useLyrics } from '../state/hooks';
import Lyrics from '../components/lyrics/Lyrics';

function SongView({ match }) {
  const { loading, lyrics } = useLyrics(match.params.artist, match.params.song);

  if(loading) return <Loading />;
  return <Lyrics lyrics={lyrics} />;
}
    
SongView.propTypes = {
  id: PropTypes.string.isRequired
}.isRequired;

export default SongView;

