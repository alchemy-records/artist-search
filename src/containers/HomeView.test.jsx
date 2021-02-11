import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HomeView from './HomeView';
import { MemoryRouter } from 'react-router-dom';

describe('HomeView container', () => {
  it('renders Artists on the page upon search', async() => {
    render(
      <MemoryRouter>
        <HomeView />
      </MemoryRouter>);

    screen.getByText('loading');

    const listOfArtists = await screen.findByTestId('artists');

    return waitFor(() => {
      expect(listOfArtists).not.toBeEmptyDOMElement();
    });
  });
});
  
