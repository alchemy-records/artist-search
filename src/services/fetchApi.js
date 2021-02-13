/* eslint-disable max-len */
export const getArtistsByName = (name, page) => {
  const offset = (page - 1) * 25;
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${name}&fmt=json&limit=25&offset=${offset}`)
    .then(res => res.json())
    .then(res => res.artists)
    .then(artists => artists.map(
      item => ({
        id: item.id,
        artist: item.name,
      })
    ));
};

export const getReleasesById = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`)
    .then(res => res.json())
    .then(res => res.releases);
};

export const getSongsById = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)
    .then(res => res.json())
    .then(res => res.recordings);
};

export const getLyrics = (artist, title) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json());
};
