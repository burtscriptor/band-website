import React from 'react';
import { FilteredTrack } from "@/types/types";

type SpotifyTopSongsProps = {
  tracks: FilteredTrack[];
};





const SpotifyTopSongs: React.FC<SpotifyTopSongsProps> = ({ tracks }) => {
  return (
    <div>
      {tracks.map((song, index)=> (
        <div key={index}>{song.name}</div>
      ))}
    </div>
  )
}

export default SpotifyTopSongs;

// Presentation, each song small tile with name of album and link to song?
