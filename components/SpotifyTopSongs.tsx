import React from 'react';
import { FilteredTrack } from "@/types/types";
import SpotifySong from './SpotifySong';

type SpotifyTopSongsProps = {
  tracks: FilteredTrack[];
};

const SpotifyTopSongs: React.FC<SpotifyTopSongsProps> = ({ tracks }) => {
  console.log(tracks);
  const topFive = tracks.slice(0,3)
  return (
    <div>
      <h2>Most popular songs from Spotify</h2>
      {topFive.map((song, index)=> (
        <SpotifySong   
        name={song.name}
        album={song.album}
        image={song.image}
        url={song.url}
        />
      ))}
    </div>
  )
}

export default SpotifyTopSongs;




// Presentation, each song small tile with name of album and link to song?
