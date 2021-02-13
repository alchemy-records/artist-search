import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';
import { Link } from 'react-router-dom';

function ReleaseList({ releases, artist }) {

  const releaseElements = releases.map(release => (
    <li key={release.id} >
      <Link to={`/${artist}/${release.title}/${release.id}`} >
        <Release id={release.id} title={release.title} date={release.date} />
      </Link>
    </li>
  ));

  return (
    <ul data-testid="releases" >
      {releaseElements}
    </ul>
  );
}

ReleaseList.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  artist: PropTypes.string.isRequired
};

export default ReleaseList;

