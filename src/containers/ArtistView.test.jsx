import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ArtistView from './ArtistView';

describe('HomeView container', () => {
  it('renders Artists on the page upon search', async() => {
    render(<ArtistView />);

    screen.getByAltText('loading');
  
    const listOfReleases = await screen.findByTestId('releases');
  
    //   return waitFor(() => {
    //     expect(listOfArtists).toBeEmptyDOMElement();
    //   });
  });
});
