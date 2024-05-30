import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from './router.module.css'
const NavBar = () => {
   
  return (
    <div className={styles.wrapper}>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/About.jsx">About</Link>
        <Link className={styles.link} to="/Contact.jsx">Contact</Link>

    </div>
  )
}

export default NavBar