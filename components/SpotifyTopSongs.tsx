import React from 'react';
import { FilteredTrack } from "@/types/types";
import SpotifySong from './SpotifySong';
import styles from '../app/styles/Home.module.css'


type SpotifyTopSongsProps = {
  tracks: FilteredTrack[];
};

const SpotifyTopSongs: React.FC<SpotifyTopSongsProps> = ({ tracks }) => {
  console.log(tracks);
  const topFive = tracks.slice(0,3).map((song, index)=> (
    <SpotifySong className="homeTile"  
    name={song.name}
    album={song.album}
    image={song.image}
    url={song.url}
    />
  ))


  return (
    <>
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Trending on Spotify</h2>
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
