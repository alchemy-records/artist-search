/* eslint-disable max-len */
import { useState, useEffect } from 'react';

export const useArtists = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]); 


  useEffect(() => {
    return fetch('http://musicbrainz.org/ws/2/artist?query=coldplay&fmt=json&limit=25')
      .then(res => res.json())
      .then(res => res.artists)
      .then(releases => {
        setLoading(false);
        setArtists(releases);
      });
  }, []);

  return {
    loading,
    artists
  };


};
