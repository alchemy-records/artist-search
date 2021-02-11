import React from 'react';
import Loading from '../components/loading/Loading';
import ReleaseList from '../components/release/ReleaseList';
import { useReleases } from '../state/artistHooks';

function ArtistView() {
  const { loading, releases } = useReleases();
  
  if(loading) return <Loading />;
  return <ReleaseList releases={releases} />;
}

export default ArtistView;

