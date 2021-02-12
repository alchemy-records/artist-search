import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/loading/Loading';
import { useLyrics } from '../state/hooks';

function SongView() {
  const { loading, lyrics } = useLyrics();

  if(loading) return <Loading />;
  return <SongView lyrics={lyrics} />;
}
    
SongView.propTypes = {
  id: PropTypes.string.isRequired
}.isRequired;

SongView.propTypes = {

};

export default SongView;

