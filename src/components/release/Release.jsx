import React from 'react';
import PropTypes from 'prop-types';

function Release({ id, title, date }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{date}</p>
    </div>
  );
}

Release.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Release;

