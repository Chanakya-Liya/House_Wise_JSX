import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
      <div className={styles.logo}>
        <a href="/">HouseWise</a>
      </div>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Navigation Links */}
      <div className={`${styles.links} ${menuOpen ? styles.active : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? styles.active : ''}
        >
          Home
        </NavLink>
        <NavLink
          to="/view-all-properties"
          className={({ isActive }) => isActive ? styles.active : ''}
        >
          View All
        </NavLink>
        <NavLink
          to="/favourites"
          className={({ isActive }) => isActive ? styles.active : ''}
        >
          Favourites
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) => isActive ? styles.active : ''}
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;