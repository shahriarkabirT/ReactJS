import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import styles from './router.module.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`${styles.links} ${isOpen ? styles.show : ''}`}>
        <Link className={styles.link} to="/" onClick={toggleMenu}>Home</Link>
        <Link className={styles.link} to="/About.jsx" onClick={toggleMenu}>About</Link>
        <Link className={styles.link} to="/UseReducerEx.jsx" onClick={toggleMenu}>UseReducerEx</Link>
        <Link className={styles.link} to="/Card.jsx" onClick={toggleMenu}>Card</Link>
        <Link className={styles.link} to="/Clock.jsx" onClick={toggleMenu}>Clock</Link>
        <Link className={styles.link} to="/Stopwatch.jsx" onClick={toggleMenu}>Stopwatch</Link>
        <Link className={styles.link} to="/UseContext.jsx" onClick={toggleMenu}>UseContext</Link>
        <Link className={styles.link} to="/UseContextExWithReducer.jsx">UseContextExWithReducer</Link>
        <Link className={styles.link} to="/GetPost.jsx">GetPost</Link>
      </div>
    </div>
  );
};

export default NavBar;
