/* eslint-disable max-len */
import React, { useState } from 'react';
import { useArtists } from '../state/hooks';
import ArtistList from '../components/artist/ArtistList';


function HomeView() {
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);

  const { loading, artists } = useArtists(name, page);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const increment = () => {
    setPage((prevPageValue) => prevPageValue + 1);
  };

  const decrement = () => {
    setPage((prevPageValue) => prevPageValue - 1);
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
          : 
          <>
            <ArtistList artists={artists} />
            <button value={page} 
              onClick={decrement}>
              Previous Page</button>
            <button value={page} 
              onClick={increment}>
              Next Page</button>
          </>
      }
    </>
  );
}

export default HomeView;
