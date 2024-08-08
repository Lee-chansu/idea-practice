import React from 'react';
import {Link} from'react-router-dom'

import styles from '../styles/header.module.css'
import button from '../styles/button.module.css'

const Header = () => {
  return (
  <header className={styles.header}>
    <div className={styles.logo}>
        <Link to='#' className={styles.link}>
            <img className={styles.logo} src="../img/Logo.png" alt="Logo" />
        </Link>
    </div>
    <div className={styles.nav}>
        <ul className={styles.nav}>
            <li className={styles.depth}><Link to="#" className={styles.link}> Home </Link></li>
            <li className={styles.depth}><Link to="#" className={styles.link}> About </Link></li>
            <li className={styles.depth}><Link to="#" className={styles.link}> Services </Link></li>
            <li className={styles.depth}><Link to="#" className={styles.link}> Contact </Link></li>
        </ul>
    </div>
    <div className={styles.isLogin}>
        <Link to="/login" className={button.loginButton}> Login </Link>
        <Link to="#" className={button.loginButton}> Sign up </Link>
    </div>
  </header>
  );
}

export default Header;
