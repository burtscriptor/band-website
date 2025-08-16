import React from 'react';
import styles from '../app/styles/Album.module.css'


interface SpotifySongProps {
    className: string;
    name: string;
    image: string;
    url: string;
    album: string;
}

const SpotifySong: React.FC<SpotifySongProps> = ({ className, name, image, url, album }) => {
    return (
        <>
        <a className={styles.noTextDecoration} href={url} target="_blank" rel="noopener noreferrer">
        <div className={className ? styles[className] : ''}key="name">
          
                <img src={image} alt="Album Cover" />
                <p>{name}</p>
                <p>From {album}</p>
           
        </div>
        </a>
        </>
    )
}

export default SpotifySong;
