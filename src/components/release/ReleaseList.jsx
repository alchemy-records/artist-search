import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';

function ReleaseList({ releases }) {
  const releaseElements = releases.map(release => (
    <li key={release.id} >
      <Release id={release.id} title={release.title} date={release.date} />
    </li>
  ));
    
  return (
    <ul >
      {releaseElements}
    </ul>
  );
}

ReleaseList.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired
};

export default ReleaseList;

