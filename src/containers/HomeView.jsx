import React, { useState } from 'react';
import { useArtists } from '../state/hooks';
import ArtistList from '../components/artist/ArtistList';


function HomeView() {
  const [name, setName] = useState('');

  const { loading, artists } = useArtists(name);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="Search By Artist"
        onChange={handleChange} />
      {
        loading && (name) ? <h1>loading</h1>
          : <ArtistList artists={artists} />
      }
    </>
  );
}

export default HomeView;
