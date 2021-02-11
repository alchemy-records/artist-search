/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { getArtistsByName, getReleasesById } from '../services/fetchApi';

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

export const useReleases = (id) => {
  const [loading, setLoading] = useState(true);
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    if(!id) return;
    setLoading(true);
    getReleasesById(id)
      .then(releases => {
        setLoading(false);
        setReleases(releases);
      });
  }, [id]);

  return {
    loading,
    releases
  };
};
