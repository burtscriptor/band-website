import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';
import CopyRight from './CopyRight';
import styles from '../app/styles/Footer.module.css';

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <SocialMediaIcons />
      <CopyRight />
    </div>
  )
};

export default Footer;

