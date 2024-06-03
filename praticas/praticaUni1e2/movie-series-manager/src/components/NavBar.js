import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
    <h1>WyldeTuk</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/watched">Assistidos</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
