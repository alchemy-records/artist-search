/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ReleaseView from './ReleaseView';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import songsData from '../fixtures/songs.json';

const server = setupServer(
  rest.get('http://musicbrainz.org/ws/2/recording?release=00b396e1-9907-42f8-abfb-3ef846e0681b&fmt=json', (req, res, ctx) => {
    return res(ctx.json(songsData));
  })
);

describe('ReleaseView container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders Songs on the page by id in url params', async() => {
    render(
      <MemoryRouter>
        <ReleaseView match={{ params: { 
          id: '00b396e1-9907-42f8-abfb-3ef846e0681b', 
          artist: 'Coldplay',
          release: 'Parachute' } }} />
      </MemoryRouter>);

    screen.getByAltText('loading');
  
    const listOfSongs = await screen.findByTestId('songs');
  
    return waitFor(() => {
      expect(listOfSongs).not.toBeEmptyDOMElement();
    });
  });
});
