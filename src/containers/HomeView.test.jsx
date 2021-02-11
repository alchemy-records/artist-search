import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HomeView from './HomeView';

describe('HomeView container', () => {
  it('renders Artists on the page upon search', async() => {
    render(<HomeView />);

    screen.getByText('loading');

    const listOfArtists = await screen.findByTestId('artists');

    return waitFor(() => {
      expect(listOfArtists).not.toBeEmptyDOMElement();
    });
  });
});
  
