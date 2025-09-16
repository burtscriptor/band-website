import React from 'react';
import Styles from '@/app/styles/Discography.module.css';

interface PlayLinksProps {
  spotify_album_id: string;
  bandcamp_id: string;
  bandcamp_page_url: string;
}

const PlayLinks: React.FC<PlayLinksProps> = ({ spotify_album_id, bandcamp_id, bandcamp_page_url }) => {

  const spotifyLink = `https://open.spotify.com/album/${spotify_album_id}`;

  const openApp = (event: React.MouseEvent<HTMLParagraphElement>) => {
    event.preventDefault();

    window.location.href = `spotify:album:${spotify_album_id}`;

    setTimeout(() => {
      window.open(spotifyLink, "_blank", "noopener,noreferrer");
    }, 800); 
  };

  return (
    <div className={Styles.playLinkWrapper}>
        {spotify_album_id ? 
      <p onClick={openApp} className={Styles.openExternalLink}>
        Open in Spotify
      </p>
      : ''
      }

      {bandcamp_id ?
      <a href={`https://wollongong.bandcamp.com/${bandcamp_page_url}`} target="_blank" rel="noopener noreferrer">
        <p className={Styles.openExternalLink}>
          Open on Bandcamp
        </p>
      </a>
      : 
      ''
    }       
    </div>
  );
};

export default PlayLinks;
