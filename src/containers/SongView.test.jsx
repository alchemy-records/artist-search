import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SongView from './SongView';
import lyricsData from '../fixtures/lyrics.json';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('https://api.lyrics.ovh/v1/coldplay/yellow', (req, res, ctx) => {
    return res(ctx.json(lyricsData));
  })
);

describe('SongView container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('renders lyrics on the page by song title and artist name', async() => {
    render(
      <MemoryRouter>
        <SongView match={{ params: { artist: 'Coldplay', song: 'Yellow' } }} /> 
      </MemoryRouter>
    );

    screen.getByAltText('loading');

    const lyrics = await screen.findByTestId('lyrics');

    return waitFor(() => {
      expect(lyrics).not.toBeEmptyDOMElement();
    });
  });
});

