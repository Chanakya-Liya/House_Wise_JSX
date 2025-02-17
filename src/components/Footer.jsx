import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 HouseWise. All Rights Reserved.</p>
      <p>
        <a href="/privacy">Privacy Policy</a> | 
        <a href="/terms"> Terms of Service</a>
      </p>
    </footer>
  );
}

export default Footer;