import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ArtistView from './ArtistView';

describe('HomeView container', () => {
  it('renders Artists on the page upon search', async() => {
    render(<ArtistView />);

    screen.getByText('loading');
  
    //   screen.getByPlaceholderText('Search By Artist');
  
    //   const listOfArtists = await screen.findByTestId('artists');
  
    //   return waitFor(() => {
    //     expect(listOfArtists).toBeEmptyDOMElement();
    //   });
  });
});
