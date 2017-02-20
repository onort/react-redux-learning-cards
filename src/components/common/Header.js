import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <span className="brand">React Redux Learning Cards</span>
      </Link>
    </nav>
  );
};

export default Header;
