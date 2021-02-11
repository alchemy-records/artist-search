import React from 'react';
import ReleaseList from '../components/release/ReleaseList';
import { useReleases } from '../state/artistHooks';

function ArtistView() {
  const {loading, releases} = useReleases();
  
  if(loading) return 'loading';
  return <ReleaseList />;
}

export default ArtistView;

