import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';
import CopyRight from './CopyRight';
import styles from '../app/styles/Footer.module.css';

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.upper}>
      <SocialMediaIcons />
      </div>
      <div className={styles.lower}>
      <CopyRight />
      </div>
    </div>
  )
};

export default Footer;

