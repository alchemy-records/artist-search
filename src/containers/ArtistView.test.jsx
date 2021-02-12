/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ArtistView from './ArtistView';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import releasesData from '../fixtures/releases.json';

const server = setupServer(
  rest.get('http://musicbrainz.org/ws/2/release?artist=cc197bad-dc9c-440d-a5b5-d52ba2e14234&fmt=json', (req, res, ctx) => {
    return res(ctx.json(releasesData));
  })
);

describe('ArtistView container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

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
