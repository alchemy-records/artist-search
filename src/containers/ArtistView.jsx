import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/loading/Loading';
import ReleaseList from '../components/release/ReleaseList';
import { useReleases } from '../state/artistHooks';

function ArtistView({ match }) {
  const { loading, releases } = useReleases(match.params.id);
  
  if(loading) return <Loading />;
  return <ReleaseList releases={releases} />;
}

ArtistView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ArtistView;
