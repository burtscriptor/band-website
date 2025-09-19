import React from 'react';
import { SpotifyTrack } from "@/types/types";
import SpotifySong from './SpotifySong';
import styles from '../app/styles/Home.module.css'


type SpotifyTopSongsProps = {
  tracks: SpotifyTrack[];
};

const SpotifyTopSongs: React.FC<SpotifyTopSongsProps> = ({ tracks }) => {
  console.log(tracks);
  const topFive = tracks.slice(0,4).map((song, i)=> (
    <SpotifySong 
    className="homeTile"  
    key={i}
    name={song.name}
    album={song.album}
    image={song?.image_url}
    url=""
    />
  ))


  return (
    <>
    <div className={styles.containerLeft}>
      <div className={styles.title}>
        <p>Spotify favourites</p>
      </div>
     <div className={styles.homeContainer}>
      {topFive}
    </div>
    </div>
    </>
  )
}

export default SpotifyTopSongs;




// Presentation, each song small tile with name of album and link to song?
