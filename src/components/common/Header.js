import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <span className="brand">Learning Cards</span>
      </Link>
    </nav>
  );
};

export default Header;
