import React from 'react';
import {Link} from'react-router-dom'

import styles from '../styles/header.module.css'

const Header = () => {
  return (
  <header className={styles.logoHeader}>
    <div className={styles.fullLogo}>
        <Link to='/' className={styles.link}>
            <img className={styles.fullLogo} src="../img/Logo.png" alt="Logo" />
        </Link>
    </div>
  </header>
  );
}

export default Header;
