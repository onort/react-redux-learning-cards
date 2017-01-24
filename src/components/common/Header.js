import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h3 className="brand">React Redux Learning Cards</h3>
      </Link>
    </div>
  );
};

export default Header;