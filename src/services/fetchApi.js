/* eslint-disable max-len */
export const getArtistsByName = (name) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${name}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(res => res.artists);
};
