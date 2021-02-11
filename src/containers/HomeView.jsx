import React, { useState } from 'react';
import PropTypes from 'prop-types';


function HomeView(props) {
  const [loading, setLoading] = useState();

  return (
    <div>
           Hello World - music search 
    </div>
  );
}

HomeView.propTypes = {

};

export default HomeView;

