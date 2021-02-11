import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HomeView from './HomeView';

describe('App component', () => {
  it('renders App', async() => {
    render(<HomeView />);

    screen.getByText('loading');

    const listOfArtists = await screen.findByTestId('artists');
  });
});
  
