import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/loading/Loading';
import SongList from '../components/song/SongList';
import { useSongs } from '../state/hooks';

function ReleaseView({ match }) {
  console.log('match', match.params.artist);

  const { loading, songs } = useSongs(match.params.id);
  console.log('songs', songs);


  if(loading) return <Loading />;
  return <SongList songs={songs} artist={match.params.artist} />;
}

ReleaseView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ReleaseView;
