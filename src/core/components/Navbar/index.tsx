import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'

const Navbar = () => (
  <nav className="main-nav">
    <Link to="/" className="link-nav">
      <h4 className="main-nav-title">Bootcamp DevSuperior</h4>
    </Link>
  </nav>
);

export default Navbar;