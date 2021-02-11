/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ArtistView from './ArtistView';
import { MemoryRouter } from 'react-router-dom';

describe('ArtistView container', () => {
  it('renders Releases on the page by id in url params', async() => {
    render(
      <MemoryRouter>
        <ArtistView match={{ params: { id: 'cc197bad-dc9c-440d-a5b5-d52ba2e14234' } }} />
      </MemoryRouter>);

    screen.getByAltText('loading');
  
    const listOfReleases = await screen.findByTestId('releases');
  
    return waitFor(() => {
      expect(listOfReleases).not.toBeEmptyDOMElement();
    });
  });
});
