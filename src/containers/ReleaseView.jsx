import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/loading/Loading';
import SongList from '../components/song/SongList';
import { useSongs } from '../state/hooks';

function ReleaseView({ match }) {

  const { loading, songs } = useSongs(match.params.id);

  if(loading) return <Loading />;
  return <SongList 
    songs={songs} 
    artist={match.params.artist} 
    release={match.params.release}/>;
}

ReleaseView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      release: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ReleaseView;
