/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { getArtistsByName, getReleasesById, getSongsById, getLyrics } from '../services/fetchApi';

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

export const useSongs = (id) => {
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if(!id) return;
    setLoading(true);
    getSongsById(id)
      .then(songs => {
        setLoading(false);
        setSongs(songs);
      });
  }, [id]);

  return {
    loading,
    songs
  };
};

export const useLyrics = (artist, title) => {
  const [loading, setLoading] = useState(true);
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    if(!title || !artist) return;
    setLoading(true);
    getLyrics(artist, title)
      .then(lyrics => {
        setLoading(false);
        setLyrics(lyrics);
      });

  }, [artist, title]);

  return {
    loading, 
    lyrics
  };

};
