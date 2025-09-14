import React from 'react';

interface PlayLinksProps {
  spotify_album_id: string;
  bandcamp_id: string;
  bandcamp_page_url: string;
  link1: string; 
  link2: string; 
}

const PlayLinks: React.FC<PlayLinksProps> = ({ spotify_album_id, bandcamp_id, bandcamp_page_url, link1, link2 }) => {

  const spotifyLink = `https://open.spotify.com/album/${spotify_album_id}`;

  const openApp = (event: React.MouseEvent<HTMLParagraphElement>) => {
    event.preventDefault();

    window.location.href = `spotify:album:${spotify_album_id}`;

    setTimeout(() => {
      window.open(spotifyLink, "_blank", "noopener,noreferrer");
    }, 800); 
  };

  return (
    <div>
        {spotify_album_id ? 
      <p onClick={openApp} className="cursor-pointer text-blue-500 underline">
        Open in Spotify
      </p>
      : ''
      }

      {bandcamp_id ?
      <a href={`https://wollongong.bandcamp.com/${bandcamp_page_url}`} target="_blank" rel="noopener noreferrer">
        <p className="cursor-pointer text-blue-500 underline">
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
