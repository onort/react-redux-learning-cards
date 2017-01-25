import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h3>This is HomePage</h3>
      <Link to="/train">Link to train</Link>
    </div>
  );
};

export default HomePage;
