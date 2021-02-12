/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HomeView from './HomeView';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import artistsData from '../fixtures/artists.json';

const server = setupServer(
  rest.get('http://musicbrainz.org/ws/2/artist?query=coldplay&fmt=json&limit=25', (req, res, ctx) => {
    return res(ctx.json(artistsData));
  })
);


describe('HomeView container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders Artists on the page upon search', async() => {
    render(
      <MemoryRouter>
        <HomeView />
      </MemoryRouter>);

    screen.getByPlaceholderText('Search By Artist');

    const listOfArtists = await screen.findByTestId('artists');

    return waitFor(() => {
      expect(listOfArtists).toBeEmptyDOMElement();
    });
  });
});
  
