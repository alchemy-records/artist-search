import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useArtists } from '../state/artistHooks';
import ArtistList from '../components/artist/ArtistList';


function HomeView(props) {
  const { loading, artists } = useArtists();

  if (loading) return 'loading'
  return <ArtistList artists={artists} />
}

HomeView.propTypes = {

};

export default HomeView;

