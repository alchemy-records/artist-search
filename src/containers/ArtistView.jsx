import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/loading/Loading';
import ReleaseList from '../components/release/ReleaseList';
import { useReleases } from '../state/hooks';

function ArtistView({ match }) {
  const { loading, releases } = useReleases(match.params.id);

  if(loading) return <Loading />;
  return <ReleaseList 
    releases={releases} 
    artist={match.params.artist}/>;
}

ArtistView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
      // release: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ArtistView;
