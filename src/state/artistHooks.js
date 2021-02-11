/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { getArtistsByName } from '../services/fetchApi';

export const useArtists = (name) => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]); 


  useEffect(() => {
    if(!name) return;
    setLoading(true);
    getArtistsByName(name)
      .then(releases => {
        setLoading(false);
        setArtists(releases);
      });
  }, [name]);

  return {
    loading,
    artists
  };
};
