import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <header>
      <nav className="nav">
        <Link to="/" className="logo">HAGER BET</Link>
        <ul className="nav-links">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
