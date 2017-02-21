import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <nav className="header">
      <div className="wrapper">
        <Link to="/">
          <span className="brand">Learning Cards</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
