import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SongView from './SongView';

describe('SongView container', () => {
  it('renders lyrics on the page by song title and artist name', async() => {
    render(
      <SongView /> 
    );

    screen.getByAltText('loading');

    const lyrics = await screen.findByTestId('lyrics');
  });
});

