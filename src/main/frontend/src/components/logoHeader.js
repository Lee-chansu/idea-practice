import React from 'react';
import {Link} from'react-router-dom'

import styles from '../styles/header.module.css'
import LogoImage from '../img/Logo.png'

const Header = () => {
  return (
  <header className={styles.logoHeader}>
    <div className={styles.fullLogo}>
        <Link to='/' className={styles.link}>
            <img className={styles.fullLogo} src={LogoImage} alt="Logo" />
        </Link>
    </div>
  </header>
  );
}

export default Header;
