'use client';

import Image from 'next/image';
import React from 'react';
import styles from '../app/styles/Footer.module.css';

const SocialMediaIcons: React.FC = () => {
    return (
        <div className={styles.socialMediaContainer}>
            <a className={styles.socialMedia} href="https://www.facebook.com/WollongongBand" target="_blank" rel="noopener noreferrer">
                <Image src="/facebook.png" alt="Facebook icon" width={32} height={32} />
            </a>
            <a className={styles.socialMedia} href="https://instagram.com/wollongongtheband" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram.png" alt="Instagram icon" width={32} height={32} />
            </a>
            <a className={styles.socialMedia} href="https://www.youtube.com/@wollongong.official" target="_blank" rel="noopener noreferrer">
                <Image src="/youtube.png" alt="YouTube icon" width={32} height={32} />
            </a>
            <a className={styles.socialMedia} href="https://open.spotify.com/artist/2ga50N9da6tAnw3QBbnmTs" target="_blank" rel="noopener noreferrer">
                <Image src="/spotify.png" alt="Spotify icon" width={32} height={32} />
            </a>
            <a className={styles.socialMedia} href="https://wollongong.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                <Image src="/bc-bandcamp-logo.png" alt="Bandcamp icon" width={32} height={32} />
            </a>
        </div>
    );
};

export default SocialMediaIcons;
