import React, { PropTypes } from 'react';

import Header from './common/Header';

const App = (props) => {
  return (
    <div>
      <Header />
      <div className="main-container">
        {props.children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;