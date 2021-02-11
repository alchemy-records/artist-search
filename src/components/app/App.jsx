import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../header/Header';
import ArtistView from '../../containers/ArtistView';
import HomeView from '../../containers/HomeView';
import ReleaseView from '../../containers/ReleaseView';
import SongView from '../../containers/SongView';

export default class App extends React.Component { 
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              component = { HomeView }
            />
            <Route
              path="/artist/:id" 
              component = { ArtistView }
            />
            <Route
              path="/release/:id" 
              component = { ReleaseView }
            />
            <Route
              path="/song/:id" 
              component = { SongView }
            />
          </Switch>
        </Router>
      </>
    );
  }
}
